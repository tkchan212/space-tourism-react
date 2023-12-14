import { useState, useEffect } from "react";
import "./index.css";
import { Dots, NumberedTitle, Typography } from "./DesignSystem";
import { crew } from "./assets/data.json";
import { useMediaQuery } from "usehooks-ts";

function Destination() {
    const [tab, setTab] = useState(0);
    const isDesktop = useMediaQuery("(min-width: 45em)");
    const isMobile = useMediaQuery("(max-width: 35em)");
    const gridTemplateAreas = () => {
        if (isMobile) {
            return (
                `"title"
                "image"
                "tabs"
                "content"`
            )
        }
        else if (isDesktop) {
            return (
                `". title title . "
                ". content image ."
                ". tabs image ."`
            )
        }
        else {
            return (
                `"title"
                "content"
                "tabs"
                "image"`
            )
        }
    }
    let focus = 0;

    const onClick = (value: number) => {
        setTab(value);
        focus = value;
    }

    
    useEffect(() => {
        const tabs = document.querySelectorAll(".dot-indicators > button");
        const keyboardFocus = (e: any ) => {
            const key = e.key;

            if (key === "ArrowRight") {
                if (focus === crew.length - 1) {
                    focus = 0;
                } else {
                    focus++;
                }
            }
            if (key === "ArrowLeft") {
                if (focus === 0) {
                    focus = crew.length - 1;
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
    <main className="grid-container flow" style={{gridTemplateAreas: gridTemplateAreas()}}>
        
            <NumberedTitle style={{ gridArea: "title" }}  number="02" title="Meet Your Crew" />
            
            <picture style={{ gridArea: "image", maxWidth: isDesktop? "100%" : "60%" }}>
                <source srcSet={crew[tab].images.webp} type="image/webp" />
                <img style={{paddingLeft: "-3em", }} src={crew[tab].images.png} alt={crew[tab].name}  />
            </picture>
            <Dots items={crew.map((crewMember) => crewMember.role)} style={{ gridArea: "tabs" }}
            onClick={onClick} activeItem={tab} />
            
            <article className="flow" style={{ gridArea: "content" }} >
                <div className="flow" >
                    <Typography _className="role" variant={"h4"}>{crew[tab].role}</Typography>
                    <Typography variant={"h3"}>{crew[tab].name}</Typography>
                </div>
                <Typography _className="text-accent text-max-width" variant={"body"}>{crew[tab].bio}</Typography>
            </article>
        
    </main>
    );
}

export default Destination;
