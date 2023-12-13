import React, { useEffect, useState } from "react";
import "./index.css";
import { NumberedTitle, Tabs, Typography } from "./DesignSystem";
import { destinations } from "./assets/data.json";
import { useMediaQuery } from "usehooks-ts";

function Destination() {
    const [tab, setTab] = useState("moon");
    const currIndex = destinations.findIndex((dest) => dest.name.toLowerCase() === tab );
    const isDesktop = useMediaQuery("(min-width: 45em)");
    let focus = 0;

    const onClick = (value: string) => {
        setTab(value);
        focus = destinations.findIndex((dest) => dest.name.toLowerCase() === value );
    }

    
    useEffect(() => {
        const tabs = document.querySelectorAll(".tab-list > button");
        const keyboardFocus = (e: any ) => {
            const key = e.key;

            if (key === "ArrowRight") {
                if (focus === destinations.length - 1) {
                    focus = 0;
                } else {
                    focus++;
                }
            }
            if (key === "ArrowLeft") {
                if (focus === 0) {
                    focus = destinations.length - 1;
                } else {
                    focus--;
                }
            }
            (tabs[focus] as any).focus();
        };
        tabs.forEach((tab) => {
            tab.addEventListener("keydown", keyboardFocus)
        });
        return () => {
            tabs.forEach((tab) => {
                tab.removeEventListener("keydown", keyboardFocus)
            });
        }
    }, []);

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
            
            
            <picture style={{ gridArea: "image", alignSelf: "start", maxWidth: isDesktop? "90%" : "60%" }}>
                <source srcSet={destinations[currIndex].images.webp} type="image/webp" />
                <img src={destinations[currIndex].images.png} alt={destinations[currIndex].name} />
            </picture>
        
            
            <Tabs items={[
                { label: 'Moon', value: 'moon' },
                { label: 'Mars', value: 'mars' },
                { label: 'Europa', value: 'europa' },
                { label: 'Titan', value: 'titan' },
            ]}
            style={{ gridArea: "tabs" }} 
            onClick={onClick} //onKeyDown={keyboardNavigation} 
            activeItem={tab} />
            
            <article className="flow" style={{ gridArea: "content" }} >
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