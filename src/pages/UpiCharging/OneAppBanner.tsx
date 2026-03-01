import React from "react";
import { ArrowRight } from "lucide-react";
import FrontPageButton from "../FrontPage/FrontPageButton";
import "./OneAppBanner.css";

const PLAYSTORE_URL =
  "https://play.google.com/store/apps/details?id=in.one.charging&hl=en_IN";

export default function OneAppBanner() {
  return (
    <div className="one-app-banner">
      <div className="one-app-banner__content">
        <p className="one-app-banner__title">One app to rule them all</p>
        <p className="one-app-banner__description">
          Skip juggling multiple wallets and fragmented networks. Use the 1C EV
          App for discovery, receipts, and a unified charging history.
        </p>
      </div>
      <div className="one-app-banner__button">
        <FrontPageButton
          variant="primary"
          icon={<ArrowRight size={18} />}
          href={PLAYSTORE_URL}
        >
          Get 1C EV App
        </FrontPageButton>
      </div>
    </div>
  );
}
