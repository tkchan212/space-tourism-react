import "./index.css";
import { ExploreButton, Typography } from "./DesignSystem";
import { useMediaQuery } from "usehooks-ts";

function Home() {
  const isDesktop = useMediaQuery("(min-width: 45em)");
  const containerStyle = isDesktop ? {
    alignContent: "end", //align items?
    paddingBottom: "6em",
    }: {}
  return (
    <main className="grid-container"
      style={containerStyle}
        /* style={
        {
         alignContent: "end", //align items?
         paddingBottom: "6em",
         }} */
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
    </main>
  );
}

export default Home;
