import React, { useState } from "react";
import "./index.css";
import { ExploreButton, NumberedTitle, Tabs, Typography } from "./DesignSystem";
import { destinations } from "./assets/data.json";
import { useMediaQuery } from "usehooks-ts";

function Destination() {
    const [tab, setTab] = useState("moon");
    const currIndex = destinations.findIndex((dest) => dest.name.toLowerCase() === tab );
    const isDesktop = useMediaQuery("(min-width: 45em)");
    return (
    <main className="grid-container flow" style={{
        gridTemplateAreas:
        isDesktop ? 
            `". title title . "
            ". image tabs ."
            ". image content ."`
        :
            `"title"
            "image"
            "tabs"
            "content"`
        }}>
        
            <NumberedTitle style={{ gridArea: "title" }}  number="01" title="Pick Your Destination" />
            <div style={{ gridArea: "image", maxWidth: isDesktop? "90%" : "60%" }} >
              <img src={destinations[currIndex].images.png} alt={destinations[currIndex].name} />
            </div>
        
        
            
            <Tabs items={[
                { label: 'Moon', value: 'moon' },
                { label: 'Mars', value: 'mars' },
                { label: 'Europa', value: 'europa' },
                { label: 'Titan', value: 'titan' },
            ]}
            style={{ gridArea: "tabs" }} 
            onClick={setTab} activeItem={tab} />
            
            <article style={{ gridArea: "content" }} >
            <Typography variant={"h2"}>{destinations[currIndex].name}</Typography>
            <Typography _className="text-accent" variant={"body"}>{destinations[currIndex].description}</Typography>
            <div className="flex destination-meta">
                <div>
                    <Typography _className="text-accent" variant={"subheading2"}>Avg. Distance</Typography>
                    <Typography style={{ fontSize: "1.5rem"}} variant={"h4"}>{destinations[currIndex].distance}</Typography>
                </div>
                <div>
                    <Typography _className="text-accent" variant={"subheading2"}>Est. Travel Time</Typography>
                    <Typography style={{ fontSize: "1.5rem"}} variant={"h4"}>{destinations[currIndex].travel}</Typography>
                </div>
            </div>
            </article>
        
    </main>
    );
}

export default Destination;
