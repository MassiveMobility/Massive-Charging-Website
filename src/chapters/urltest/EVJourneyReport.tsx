import React, { useState } from 'react';
import { Battery, MapPin, Zap, AlertCircle, Car, Navigation } from 'lucide-react';

interface RouteLocation {
  name: string;
}

interface Episode {
  episode: number;
  paragraphs: string[];
  images: any[];
}

interface VehicleInfo {
  make_model: string;
  battery_kwh: number;
  estimated_range_km: {
    min: number;
    max: number;
  };
}

interface JourneyData {
  title: string;
  trip_name: string;
  vehicle: VehicleInfo;
  route: RouteLocation[];
  episodes: Episode[];
}

const EVJourneyReport: React.FC = () => {
  const [activeEpisode, setActiveEpisode] = useState<number>(0);
  
  const data: JourneyData = {
    title: "EV Charging XP - Journal & Product Research Report",
    trip_name: "Noida to Vrindavan to Kundli with MG Windsor EV",
    vehicle: {
      make_model: "MG Windsor EV",
      battery_kwh: 38,
      estimated_range_km: { min: 220, max: 300 }
    },
    route: [
      { name: "Noida Sector 61" },
      { name: "Vrindavan (Omaxe, near Prem Mandir)" },
      { name: "Kundli" }
    ],
    episodes: [
      {
        episode: 1,
        paragraphs: [
          "It is 30th October. Our MG Windsor EV (with 38kwh battery ~ 220-300km) is charged to 100% and we are ready for a trip from Noida Sector 61 to Omaxe (Near Prem Mandir) Vrindavan. There are two of us and we don't have much luggage.",
          "A few points: Vrindavan is about 155km away from the current location. So, it is around 300km+ round trip but the vehicle has a range of 200-250km. We are planning on taking the Yamuna Expressway. We don't have any assurace that there will be charging infrastructure at Vrindavan. So, there is range anxiety.",
          "In order to solve the range anxiety, I come up with a plan. I download various EV charging apps on my phone - MG EV Hub, Tata Ez Charging, Plugshare, Statiq, 1C Charging, and other apps like Zeon Charging and ChargeZone. A day before the journey, I conduct a little experiment. I start exploring the apps and looking for DC Fast Chargers near me. I observe that 1C Charging, Zeon Charging, and ChargeZone are not showing DC chargers. 1C Charging is showing AC Chargers which have either standard AC Sockets, or Type 1/Type 2 cable. Plugshare, Tata Ez and Statiq are showing DC Chargers around me. PlugShare has the most number of chargers listed in the map, Statiq has the second most, and Tata Ez has the least. I also check Google Maps to search for EV Chargers around me (auto-suggested). I observe that Sector 62 has around 3 DC Chargers and the location is present in all the apps, i.e. Google, Statiq, Tata, and PlugShare are showing the same location for DC Chargers. I go to the location. Unfortunately, the chargers at first location are offline. Of the two chargers at the second location, 1 is offline, while the other is busy, though the Tata Ez app showed that all were available.",
          "Google Maps & Tata Ez show a few same chargers. They are absent from Statiq",
          "Finally, I reach an OYO like hotel where I find empty DC chargers. I plug the CCS cable into the vehicle, and operate the Tata DC Charger with Tata Ez app. I locate the charger in the app, identify the charger name (Charge A - Connector 2) and start charging. The Charging starts and stops immediately. This happens 3 times. Then a Tata Nexon EV driver also comes to charge the car and upon seeing a new MG Windsor EV, he gets excited. He turns out to be a sales agent, and advises me to hold the charging connector plug to the car in order to start charging. I follow the instruction and charging works. I charge for 5 minutes then leave.",
          "Thus, I have anxiety that Apps are not 100% reliable. Chargers are not 100% reliable. There is a lot of hassle involved in starting the charging. The charging itself is fast and quick providing confidence and happiness.",
          "Despite charging my vehicle, I decided to test out Plugshare app as well in order to confirm whether the listed chargers on the map are present in real life or not. Unfortunately, I could not discover a single charger and realized that out of the community listed 1000+ chargers in Plugshare, 70-90% of them are imaginary. Plugshare took me to disgusting and dangerous location where the car couldn't even enter and there was no chance of a DC Charger being present in such a location. So, Plugshare was dropped.",
          "Of all the apps, Statiq proved to be the best and most reliable. Statiq provided many functional features, such as trip planner, and for some reason (maybe due to App UI), it felt more reliable. It listed all the nearby chargers in the map, much like how Google Maps lists various places. More on this later.",
          "So, overall, before setting out on the trip, I had a decent experience with charging my MG Windsor EV car. I used mobile apps to locate charging station near me. I discovered the DC fast chargers and used the mobile phone app to control the charger. I was satisfied with the charging experience itself, but the precursor to charging, i.e. locating and controlling the charger was shaky and filled with bugs and glitches. I'll list them down here:",
          "There are 10-15+ apps on phone and I don't know which is more reliable than others. EV Charging apps show imaginary, faulty, unavailable, and available chargers at the same time. So, locating and reaching an EV charger is a gamble. The EV Charging App's connection with DC Charger is also glitchy. Chargers don't have any ID, name, or Barcode marker, scanner etc. The names on the charger might not correspond with the name on the phone charger. So, there is user anxiety - what if the charger I've selected on the phone and in which I'm about to pay 100-300 rupees is not the right charger which is connected to my vehicle? Will my money go to waste? Finally, the charging requirement also demands mathematical knowledge from the user.",
          "For example, my MG Windsor EV with 38kwh battery capacity is at 42% charge. Now, I can see immediately, that I need 58% battery in my car. However the charging app and the charger don't give me the option to charge through percentage. It asks me to put input time, charging cost, and unit consumed. How will I know how much time, unit, or cost is required to charge 52%? In order to get the answer, I have to do the calculations manually, but since the science involves knowledge of charger's power rating, voltage, battery capacity, etc, it is not as intuitive as filling petrol in the car. After doing the calculation (manually or GPT), one gets an idea that x minutes are suitable for this much charging. This feature can be automated and incorporated in the apps."
        ],
        images: []
      },
      {
        episode: 2,
        paragraphs: [
          "We are inside the car and begun the journey. The car is on Eco driving mode, auto-cruising at 80-110km on the Noida-Greater Noida expressway and the Yamuna expressway. We have discovered a few charging stations in Vrindavan through Statiq and Tata Ez app though there is no way to confirm whether the stations will be work or not. At this point, Statiq has clearly beaten all other apps due to a simple reason - Trip planner.",
          "Most of the EV Charging Apps show EV chargers around your present location. This unfolds through the familiar Google Map like interface. Your current location is highlighted with an icon and all the available chargers are shown around your locations in the map. This kind of interface works when you are still and standing, and not driving your vehicle, as it demands focus and concentration from your end to locate and navigate the chargers. Furthermore, each charging station demands you to check various items in the app such as whether the charger is available, what type of connector it has, what is the price/unit, and how far is it away from the current location. This kind of operation is not possible while driving at 80-110kmph on the highway. Statiq solves this problem by giving the Trip Planner.",
          "In the Trip Planner, you can put the starting and end point of your journey, and the app will show all the available charging stations on the path. You can go through them one by one before starting your journey, and you can select those which look promising. Once you begin the journey, Statiq gives you a customized Google Map route which contains all the charging stations as additional stops between starting point and destination. This can be integrated with the car's navigational screen and you can easily navigate to the charger without having to rely on the phone again and again. This is by far the most niggle free way of discovering charger without re-routing too much or getting waylaid from the primary path. It is convenient as the chargers end up on your travel path itself. However, nothing beats the simplicity of spotting locations on Google Maps itself.",
          "Select start and end point and acquire list of station. Select station and get them on your Google Map as A,B,C,D",
          "So, by using the Statiq Trip planner we knew that we'd come across 3 charging station in our journey. As we were nearing the first charger, we came across a food joint cum petrol station and inquired the guard about the availability of any EV charger. The guard responded in the affirmative and guided us towards a Tata EV charging station. A premium station with 4 clean and good looking chargers. Nice designated EV Car parking space. Mahindra BE6, Tata Nexon, and our Windsor EV car are shining in the sunlight. Unfortunately, none of the chargers are working. The screen shows 'Faulted'. All the EV cars and owners are looking at each other and getting irritated. Furthermore, the Charger (located at convenient hotspot) charged 600 rupees/15 minutes ~ 4x the normal price.",
          "The Tata Charging Station was dropped. It was not shown in the Statiq app, maybe because Statiq knew that it was faulted. We went to the other locations shown originally in the charging app. We discovered a fancy Statiq charger situated at an unfancy local restaurant. The same BE 6 is connected here and another car is parking in the charging spot. We get out and do some inquiries. The charger is working, but it will take them ~30 minutes to finish. There is an electrician from Statiq and he is fiddling with the charger. He said that the charger is malfunctioning and he is fixing it. It will come to life pretty soon. He said that he only takes care of Statiq chargers around the place. When I asked him more, he stopped showing interest and went back to work.",
          "We abandoned this charger as well and went to the last one - Ecoplug charger on the Laddu Gopal road. Miraculously we come across a large open space with capacity for 15+ car parking. It is empty and there is dusty Ecoplug charger standing near the hedge. A small boy is sitting on the stool inviting passerby cars to come to the restaurant. We ask him about the condition of the charger and he confirmed that everything is working. So, we plug the connector to the vehicle, activate the charger with the app, and the charging begins. Great! Then the charging stops automatically. Not so great. We run the same process again and the charging begins once again.",
          "Here, there are a few points. Metrics shown on charger, on app, in the car, and in the car phone app are not in sync. We take the car's charging metric to be the most reliable and observe that Statiq is showing incorrect info, and Charger's metrics are also not matching. So, this was a minor issue. Furthermore, we didn't know how many units to charge in order to take our vehicle from 48% to 70%. We decided that we will take a break for 30 minutes and complete as much charging as possilbe. We put the charger and enjoyed Paneer Parantha and Tea at Vrindavan restaurant. This shows that there is opportunity for business owner to increase their sales by providing charging space to Ev owners who get locked to the space and are intuitievly prompted to enjoy the amenties and shed some cash from their wallets. This shows market potential and everybody benefits.",
          "Unfortunately, while we are munching our Gobhi and Paneer Parantha there was a light outage and our charging stopped at 72%. We left the place after 30-40 minutes and reached our hotel."
        ],
        images: []
      },
      {
        episode: 3,
        paragraphs: [
          "We are inside the hotel premise. It is a society which has turned into rental space and cheap tourist hotel. The area is overcrowded and the shops don't look trustworthy. There are no direct charging spots available inside the premise. We can always engage in the reliable home 3.3kw AC 16A socket charging, but the shopkeepers are hesitant and our room is in the 3rd floor so there is no scope for standard AC charging. I look in the app, but Statiq's information keeps fluctuating. Sometimes it shows a charger 7km away, but at other times, this charger vanishes. I observe many EV cars inside the premise and inquire them about charging, but they tell me that they do 3.3kw or 7.4kw Home charging as most of them have come from Mathura.",
          "The next day, I find a community listed charger 500m away from my hotel, and locate the place with my scooty. It is a spiritual resort which has a DC charger indeed and the guard tells me that he will charge my EV cars as he'd done with others. So, I take the Windsor EV and get it charged from the offline charger. The guard controlled the charger with buttons and the boss calculated the price manually asking me car name (though he never bothered asking battery capacity). Here, there is a huge opportunity for 1C to discover all these offline and local DC chargers and offer them our CMS subscription. These folks will benefit a lot from the integration. Their discovery and sales will go up as well and 1C will build its CPO customer base. The charger on this location was called ChargeOnWay and it was not available on Statiq or Tata. It was available only in the community listed section of Statiq which is not the default view in the app.",
          "After charging the car to 99%, we became happy and started the journey from Vrindavan to Kundli. We had to cover 197km. Driving on the Yamuna expressway at 100-110kmph on Eco mode, the battery dropped to 40% after 120km. Now there was anxiety. What if the car becomes 0 before reaching Kundli. So we decided to charge it again using Statiq and once again we discovered the charger on our way. This charger also gave us a few problems, as it stopped showing itself on the app due to which there was no way to control it. After a few minutes, the charger popped up again - a few km away from our current location, and activated it. We charged for 20 minutes and battery went from 30 to 80. Then we cruised on Normal and Sports mode and finished the remaining km quickly. This was the total charging experience."
        ],
        images: []
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 py-16 relative">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-blue-400" />
            <span className="text-blue-400 font-semibold tracking-wide">EV Journey Report</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {data.trip_name}
          </h1>
          
          {/* Vehicle Info Card */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 mb-8 max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <Car className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">{data.vehicle.make_model}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-blue-300 text-sm mb-1">Battery Capacity</p>
                <p className="text-white text-xl font-bold">{data.vehicle.battery_kwh} kWh</p>
              </div>
              <div>
                <p className="text-blue-300 text-sm mb-1">Estimated Range</p>
                <p className="text-white text-xl font-bold">
                  {data.vehicle.estimated_range_km.min}-{data.vehicle.estimated_range_km.max} km
                </p>
              </div>
            </div>
          </div>

          {/* Route */}
          <div className="flex items-center gap-4 flex-wrap">
            {data.route.map((location, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur px-4 py-2 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-white font-medium">{location.name}</span>
                </div>
                {idx < data.route.length - 1 && (
                  <Navigation className="w-5 h-5 text-blue-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Episode Navigation */}
      <div className="bg-black/30 backdrop-blur border-y border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-4 overflow-x-auto">
            {data.episodes.map((ep, idx) => (
              <button
                key={idx}
                onClick={() => setActiveEpisode(idx)}
                className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                  activeEpisode === idx
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                Episode {ep.episode}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Episode Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <Battery className="w-6 h-6 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">
              Episode {data.episodes[activeEpisode].episode}
            </h2>
          </div>
          
          <div className="space-y-6">
            {data.episodes[activeEpisode].paragraphs.map((para, idx) => (
              <p key={idx} className="text-white/90 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>

          {/* Key Insights Box */}
          {activeEpisode === 0 && (
            <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-yellow-400 font-bold text-lg mb-2">Key Challenges Identified</h3>
                  <ul className="text-white/80 space-y-2">
                    <li>• Multiple apps required with inconsistent data</li>
                    <li>• Chargers showing as available when offline or faulted</li>
                    <li>• Complex calculations required for charging sessions</li>
                    <li>• Poor naming conventions and identification systems</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeEpisode === 1 && (
            <div className="mt-8 bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-green-400 font-bold text-lg mb-2">Winner: Statiq Trip Planner</h3>
                  <p className="text-white/80">
                    Statiq's trip planning feature emerged as the most useful tool, allowing route-based charger discovery and seamless Google Maps integration.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeEpisode === 2 && (
            <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-blue-400 font-bold text-lg mb-2">Market Opportunity</h3>
                  <p className="text-white/80">
                    Offline and community chargers represent a significant untapped market for CMS integration and discovery platforms.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setActiveEpisode(Math.max(0, activeEpisode - 1))}
            disabled={activeEpisode === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeEpisode === 0
                ? 'bg-white/5 text-white/30 cursor-not-allowed'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            ← Previous
          </button>
          <button
            onClick={() => setActiveEpisode(Math.min(data.episodes.length - 1, activeEpisode + 1))}
            disabled={activeEpisode === data.episodes.length - 1}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeEpisode === data.episodes.length - 1
                ? 'bg-white/5 text-white/30 cursor-not-allowed'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default EVJourneyReport;