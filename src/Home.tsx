import logo from "./assets/shared/logo.svg";
import bgDesktop from "./assets/home/background-home-desktop.jpg";
import bgTablet from "./assets/home/background-home-tablet.jpg";
import bgMobile from "./assets/home/background-home-mobile.jpg";
import "./index.css";
import { ExploreButton, Navigation, Typography } from "./DesignSystem";
import { useMediaQuery } from "usehooks-ts";

function Home() {
  const isDesktop = useMediaQuery("(min-width: 45em)");
  const isMobile = useMediaQuery("(max-width: 35em)");
  const backgroundImg = () => {
    if (isDesktop) {
      return bgDesktop;
    } else if (isMobile) {
      return bgMobile;
    } else {
      return bgTablet;
    }
  }
  return (
    <div
      className="home"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "min-content 1fr",
        /* back in the tutorial this was written in the body, we're working in react so cannot use the body anymore 
        may need to reuse this across pages */
        backgroundImage: `url(${backgroundImg()})`,
        backgroundSize: "cover",
        backgroundPosition: !isDesktop? "bottom center" : "center center",
      }}
    >
      <div className="primary-header flex">
        {/* we're working in react so cannot use the header anymore */}
        <div>
          <img src={logo} alt="space tourism logo" className="logo" />
        </div>
          <Navigation
            items={[
              { number: "00", text: "Home" },
              { number: "01", text: "Destination" },
              { number: "02", text: "Crew" },
              { number: "03", text: "Technology" },
            ]}
            activeItem="00"
          />
      </div>
      <div className="grid-container"
      style={{
        alignContent: "end", //align items?
        paddingBottom: "6em",
      }}
      >
        <div className="grid-div-1">
          <Typography variant={"h5"}>So, you want to travel to</Typography>
          <Typography variant={"h1"}>Space</Typography>
          <p className="text-accent">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="grid-div-2">
          <ExploreButton />
        </div>
      </div>
    </div>
  );
}

export default Home;
