import { useState } from "react";
import "./index.css";
import { Dots, NumberedTitle, Tabs, Typography } from "./DesignSystem";
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
                `". title image . "
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
    
     
    return (
    <main className="grid-container flow" style={{gridTemplateAreas: gridTemplateAreas()}}>
        
            <NumberedTitle style={{ gridArea: "title" }}  number="02" title="Meet Your Crew" />
            <div style={{ gridArea: "image", maxWidth: isDesktop? "90%" : "60%" }} >
              <img src={crew[tab].images.png} alt={crew[tab].name} />
            </div>
        
        
            
            <Dots items={crew.map((crewMember) => crewMember.role)} style={{ gridArea: "tabs" }}
            onClick={setTab} activeItem={tab} />
            
            <article style={{ gridArea: "content" }} >
            <Typography _className="role" variant={"h4"}>{crew[tab].role}</Typography>
            <Typography variant={"h2"}>{crew[tab].name}</Typography>
            <Typography _className="text-accent" variant={"body"}>{crew[tab].bio}</Typography>
            </article>
        
    </main>
    );
}

export default Destination;
