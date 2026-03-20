import { getGoogleMapsApiKey } from "@/features/maps/config";

export type GoogleMapsLibrary = "maps" | "marker" | "places" | "geometry";

export type GoogleMapsNamespace = {
  Map: new (element: HTMLElement, options?: Record<string, unknown>) => {
    fitBounds: (bounds: unknown, padding?: number) => void;
    panTo: (position: unknown) => void;
    setZoom: (zoom: number) => void;
    setOptions: (options: Record<string, unknown>) => void;
  };
  Marker: new (options?: Record<string, unknown>) => {
    setMap: (map: unknown) => void;
    addListener: (eventName: string, handler: () => void) => unknown;
  };
  InfoWindow: new (options?: Record<string, unknown>) => {
    close: () => void;
    setContent: (content: string) => void;
    open: (options: Record<string, unknown>) => void;
    addListener?: (eventName: string, handler: () => void) => unknown;
  };
  LatLngBounds: new () => {
    extend: (point: unknown) => void;
  };
  Point: new (x: number, y: number) => unknown;
  Size: new (width: number, height: number) => unknown;
  event?: {
    clearInstanceListeners: (instance: unknown) => void;
  };
  importLibrary?: (name: GoogleMapsLibrary) => Promise<unknown>;
};

declare global {
  interface Window {
    google?: {
      maps: GoogleMapsNamespace;
    };
    __massiveChargingGoogleMapsInit?: () => void;
    gm_authFailure?: () => void;
  }
}

const GOOGLE_MAPS_SCRIPT_ID = "massive-charging-google-maps-script";
const CALLBACK_NAME = "__massiveChargingGoogleMapsInit";
const LOAD_TIMEOUT_MS = 20_000;

let mapsPromise: Promise<GoogleMapsNamespace> | null = null;

const resolveGoogleMapsNamespace = () => {
  const maps = window.google?.maps;
  if (!maps) {
    throw new Error("Google Maps loaded, but the maps namespace is unavailable.");
  }
  return maps;
};

const injectGoogleMapsScript = (apiKey: string) =>
  new Promise<GoogleMapsNamespace>((resolve, reject) => {
    if (window.google?.maps) {
      resolve(resolveGoogleMapsNamespace());
      return;
    }

    const existingScript = document.getElementById(
      GOOGLE_MAPS_SCRIPT_ID
    ) as HTMLScriptElement | null;
    let settled = false;
    let timeoutId = 0;
    let pollId = 0;

    const cleanup = () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(pollId);
      if (window[CALLBACK_NAME]) {
        delete window[CALLBACK_NAME];
      }
      if (window.gm_authFailure) {
        delete window.gm_authFailure;
      }
    };

    const fail = (error: Error) => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(error);
    };

    const finish = () => {
      if (settled) return;
      try {
        const maps = resolveGoogleMapsNamespace();
        settled = true;
        cleanup();
        resolve(maps);
      } catch {
        window.setTimeout(() => {
          try {
            const maps = resolveGoogleMapsNamespace();
            if (settled) return;
            settled = true;
            cleanup();
            resolve(maps);
          } catch (retryError) {
            fail(
              retryError instanceof Error
                ? retryError
                : new Error("Google Maps failed to initialize.")
            );
          }
        }, 0);
      }
    };

    const handleAuthFailure = () => {
      fail(
        new Error(
          "Google Maps authentication failed. Check API key restrictions, billing, and Maps JavaScript API access."
        )
      );
    };

    window[CALLBACK_NAME] = finish;
    window.gm_authFailure = handleAuthFailure;
    timeoutId = window.setTimeout(() => {
      fail(new Error("Google Maps loading timed out before initialization completed."));
    }, LOAD_TIMEOUT_MS);

    if (existingScript) {
      existingScript.addEventListener(
        "error",
        () => fail(new Error("Google Maps failed to load.")),
        { once: true }
      );
      pollId = window.setInterval(() => {
        if (window.google?.maps) {
          finish();
        }
      }, 100);
      return;
    }

    const script = document.createElement("script");
    script.id = GOOGLE_MAPS_SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey
    )}&v=weekly&loading=async&callback=${CALLBACK_NAME}&region=IN&language=en-IN`;
    script.addEventListener(
      "error",
      () => fail(new Error("Google Maps failed to load.")),
      { once: true }
    );
    document.head.appendChild(script);
  });

/**
 * Loads Google Maps JavaScript API on-demand and caches the namespace instance.
 */
export const loadGoogleMapsApi = async (libraries: GoogleMapsLibrary[] = ["maps"]) => {
  const apiKey = getGoogleMapsApiKey();
  if (!apiKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY. Add it to your environment before rendering map routes."
    );
  }

  if (!mapsPromise) {
    mapsPromise = injectGoogleMapsScript(apiKey).catch((error) => {
      mapsPromise = null;
      throw error;
    });
  }

  const maps = await mapsPromise;

  if (maps.importLibrary) {
    await Promise.all(
      [...new Set(libraries)].map((library) => maps.importLibrary!(library))
    );
  }

  return maps;
};
