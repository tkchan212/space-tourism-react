import "./index.css";
import { ExploreButton, Typography } from "./DesignSystem";

function Destination() {

  return (
    <main className="grid-container">
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
    </main>
  );
}

export default Destination;
