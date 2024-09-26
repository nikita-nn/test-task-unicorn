import React from "react";

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
        <div className="main-heading">
          <h1>Explore Your own planet</h1>
          <h1>In our New metaverse</h1>
        </div>
        <p className="main-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
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
            <input className={"beta-test-form-input"} id={"name"} />
          </div>
          <div className="flex flex-col gap-2">
            <label className={"beta-test-form-label"}>EMAIL</label>
            <input className={"beta-test-form-input"} id={"email"} />
          </div>
          <button className={"connect-button"} type={"submit"}>
            Connect metamask
          </button>
        </form>
        <p className={"beta-test-description text-[14px] font-[700] uppercase"}>
          You need to connect wallet before registration
        </p>
      </section>
      <footer className={"footer-main-page"}></footer>
    </main>
  );
};

export default App;
