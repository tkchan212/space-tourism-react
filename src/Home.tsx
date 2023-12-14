import "./index.css";
import { ExploreButton, Typography } from "./DesignSystem";
import { useMediaQuery } from "usehooks-ts";
import { useNavigate } from "react-router-dom";

function Home() {
  const isDesktop = useMediaQuery("(min-width: 45em)");
  const containerStyle = isDesktop ? {
    alignContent: "end", //align items?
    paddingBottom: "6em",
    }: {}
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    navigate("/destination");
  }
  return (
    <main className="grid-container"
      style={containerStyle}
      >
        <div className="grid-div-1">
          <Typography variant={"h5"}>So, you want to travel to</Typography>
          <Typography variant={"h1"}>Space</Typography>
          <p className="text-accent text-max-width">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="grid-div-2">
          <ExploreButton onClick={onClick} />
        </div>
    </main>
  );
}

export default Home;
