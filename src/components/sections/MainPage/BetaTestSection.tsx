export const BetaTestSection = () => (
  <section className="beta-test-section">
    <h1 className={"beta-test-heading"}>Beta test registration</h1>
    <p className={"beta-test-description  font-avenir"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.{" "}
    </p>
    <form className={"beta-test-form"} onSubmit={() => console.log("submit")}>
      <div className="flex flex-col gap-2">
        <label className={"beta-test-form-label"}>NAME</label>
        <input
          className={"beta-test-form-input font-avenir"}
          id={"name"}
          placeholder={"We will display your name in participation list "}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className={"beta-test-form-label"}>EMAIL</label>
        <input
          className={"beta-test-form-input font-avenir"}
          id={"email"}
          placeholder={"We will display your email in participation list "}
        />
      </div>
      <button className={"connect-button"} type={"submit"}>
        Connect metamask
      </button>
    </form>
    <p
      className={
        "beta-test-description text-[0.875rem] font-[700] uppercase tracking-wider"
      }
    >
      You need to connect wallet before registration
    </p>
  </section>
);
