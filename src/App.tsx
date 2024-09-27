import React from "react";
import { mockStats } from "./data/stats.ts";

const App = () => {
  const submit = (e: React.FormEvent) => {
    console.log(e);
  };
  return (
    <main>
      <header className="header-main-page">
        <img src={"/pasteYourLogo.svg"} alt={"logo"} />
        <button className="connect-button">CONNECT METAMASK</button>
      </header>

      <section className="main-section">
        <div className={"flex flex-col gap-10"}>
          <h1 className={"main-heading"}>
            <span>Explore Your own planet</span>
            <br />
            <span>In</span>
            <span className={"text-transparent text-stroke"}> our New </span>
            <span>metaverse</span>
          </h1>
          <img
            src={"/planet.png"}
            className={"planet-picture"}
            alt={"planet"}
          />
          <p className="main-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={"flex flex-col gap-7 text-center"}>
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

      <section className="beta-test-section">
        <h1 className={"beta-test-heading"}>Beta test registration</h1>
        <p className={"beta-test-description"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <form className={"beta-test-form"} onSubmit={(e) => submit(e)}>
          <div className="flex flex-col gap-2">
            <label className={"beta-test-form-label"}>NAME</label>
            <input
              className={"beta-test-form-input"}
              id={"name"}
              placeholder={"We will display your email in participation list "}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={"beta-test-form-label"}>EMAIL</label>
            <input
              className={"beta-test-form-input"}
              id={"email"}
              placeholder={"We will display your name in participation list "}
            />
          </div>
          <button className={"connect-button"} type={"submit"}>
            Connect metamask
          </button>
        </form>
        <p
          className={
            "beta-test-description text-[14px] font-[700] uppercase tracking-wider"
          }
        >
          You need to connect wallet before registration
        </p>
      </section>
      <footer className={"footer-main-page"}></footer>
    </main>
  );
};

export default App;
