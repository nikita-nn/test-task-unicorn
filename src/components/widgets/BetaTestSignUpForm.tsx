export const BetaTestSignUpForm = () => {
  return (
    <>
      <form className={"beta-test-form"} onSubmit={() => console.log("submit")}>
        <div className="flex flex-col gap-2">
          <label className={"beta-test-form-label"}>NAME</label>
          <input
            className={"main-input font-avenir"}
            id={"name"}
            placeholder={"We will display your name in participation list "}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className={"beta-test-form-label"}>EMAIL</label>
          <input
            disabled
            className={"main-input font-avenir"}
            id={"email"}
            placeholder={"We will display your email in participation list "}
          />
        </div>
        <button className={"main-button"} type={"submit"}>
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
    </>
  );
};
