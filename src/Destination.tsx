import React, { useState } from "react";
import "./index.css";
import { ExploreButton, NumberedTitle, Tabs, Typography } from "./DesignSystem";
import { destinations } from "./assets/data.json";

function Destination() {
    const [tab, setTab] = useState("moon");
    const currIndex = destinations.findIndex((dest) => dest.name.toLowerCase() === tab );
    //const currImage = destinations[currIndex].images.png;
    return (
    <main className="grid-container">
        <div className="grid-div-1">
          <NumberedTitle number="01" title="Pick Your Destination" />
          <div>
            <img src={destinations[currIndex].images.png} alt={destinations[currIndex].name} />
          </div>
        </div>
        <div className="grid-div-2">
            <Tabs items={[
                { label: 'Moon', value: 'moon' },
                { label: 'Mars', value: 'mars' },
                { label: 'Europa', value: 'europa' },
                { label: 'Titan', value: 'titan' },
            ]} 
            onClick={setTab} activeItem={tab} />
            <Typography variant={"h2"}>{destinations[currIndex].name}</Typography>
            <Typography variant={"body"}>{destinations[currIndex].description}</Typography>
            <div className="flex">
            <Typography variant={"subheading2"}>Avg. Distance</Typography>
            <Typography variant={"h4"}>{destinations[currIndex].distance}</Typography>
            <Typography variant={"subheading2"}>Est. Travel Time</Typography>
            <Typography variant={"h4"}>{destinations[currIndex].travel}</Typography>
            </div>
        </div>
    </main>
    );
}

export default Destination;
