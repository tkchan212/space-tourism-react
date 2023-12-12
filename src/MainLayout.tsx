import logo from "./assets/shared/logo.svg";
import bgDesktop from "./assets/home/background-home-desktop.jpg";
import bgTablet from "./assets/home/background-home-tablet.jpg";
import bgMobile from "./assets/home/background-home-mobile.jpg";
import "./index.css";
import { Navigation } from "./DesignSystem";
import { useMediaQuery } from "usehooks-ts";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const isDesktop = useMediaQuery("(min-width: 45em)");
  const isMobile = useMediaQuery("(max-width: 35em)");
  const pathname = useLocation().pathname;
  const tab = pathname.split("/")[1];
  const backgroundImg = () => {
    if (tab === "home") {
        if (isDesktop) {
            return bgDesktop;
          } else if (isMobile) {
            return bgMobile;
          } else {
            return bgTablet;
          }
    }
    else return null
  }/* TODO: move this to CSS */
  return (
    <div
      className={`${tab}`}
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
      <a className="skip-to-content" href="#main">Skip to Content</a>
      <div className="primary-header flex">
        {/* we're working in react so cannot use the header anymore */}
        <div>
          <img src={logo} alt="space tourism logo" className="logo"/>
        </div>
          <Navigation
            items={[
              { number: "00", link: "home", text: "Home" },
              { number: "01", link: "destination", text: "Destination" },
              { number: "02", link: "crew", text: "Crew" },
              { number: "03", link: "technology", text: "Technology" },
            ]}
            activeItem={tab}
          />
      </div>
      <Outlet />
    </div>
  );
}

export default MainLayout;
