import logo from "./assets/shared/logo.svg";
import "./index.css";
import { Navigation } from "./DesignSystem";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const pathname = useLocation().pathname;
  const tab = pathname.split("/")[1];

  return (
    <div
      className={`${tab}`}
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "min-content 1fr",
        /* back in the tutorial this was written in the body, we're working in react so cannot use the body anymore 
        may need to reuse this across pages */
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
