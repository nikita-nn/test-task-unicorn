import { Planet } from "../../Planet.tsx";
import { mockStats } from "../../../data/stats.ts";

export const MainSection = () => (
  <section className="main-section">
    <div className={"flex flex-col gap-10 relative"}>
      <h1 className={"main-heading relative"}>
        <span>Explore Your own planet</span>
        <br />
        <span>In</span>
        <span className={"text-transparent text-stroke"}> our New </span>
        <span className={"bg-blend-multiply"}>metaverse</span>
      </h1>
      <Planet />
      <p className="main-description font-avenir">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
    <div className={"flex flex-col gap-4 text-center"}>
      <h1 className={"main-subheading"}>roadmap stats</h1>
      <div className={"main-stats-container"}>
        {mockStats.map((stat, index) => (
          <>
            <div className={`main-stats-elem`} key={index}>
              <h1 className={"main-stats-heading"}>{stat.data}</h1>
              <p className={"main-stats-description"}>{stat.name}</p>
            </div>
            <div className={"w-[12rem] h-[1px] bg-[#D2C4C4]"} />
          </>
        ))}
      </div>
    </div>
  </section>
);
