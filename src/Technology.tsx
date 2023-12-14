import { useState, useEffect } from "react";
import "./index.css";
import { Numbers, NumberedTitle, Typography } from "./DesignSystem";
import { technology } from "./assets/data.json";
import { useMediaQuery } from "usehooks-ts";

function Technology() {
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
                `". title title title . "
                ". tabs content image image"`
            )
        }
        else {
            return (
                `"title"
                "image"
                "tabs"
                "content"`
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
                if (focus === technology.length - 1) {
                    focus = 0;
                } else {
                    focus++;
                }
            }
            if (key === "ArrowLeft") {
                if (focus === 0) {
                    focus = technology.length - 1;
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
        
            <NumberedTitle style={{ gridArea: "title" }}  number="03" title="Space Launch 101" />
            
            <picture style={{ gridArea: "image", width:  "100%" }}>
                <img src={ isDesktop ? technology[tab].images.portrait : technology[tab].images.landscape} alt={technology[tab].name}  />
            </picture>
            <Numbers items={technology.map((tech) => tech.name)} style={{ gridArea: "tabs" }}
            onClick={onClick} activeItem={tab} />
            
            <article className="flow" style={{ gridArea: "content" }} >
                <div className="flow" >
                    <p className="text-accent">THE TERMINOLOGY…</p>
                    <Typography variant={"h3"}>{technology[tab].name}</Typography>
                </div>
                <Typography _className="text-accent text-max-width" variant={"body"}>{technology[tab].description}</Typography>
            </article>
        
    </main>
    );
}

export default Technology;
