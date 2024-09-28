import { BetaTestListMeComponent } from "../../widgets/BetaTestListMeComponent.tsx";
import { useUser } from "../../../providers/UserProvider.tsx";
import { BetaTestSignUpForm } from "../../widgets/BetaTestSignUpForm.tsx";
import { BetaTestUsersTable } from "../../widgets/BetaTestUsersTable.tsx";
export const BetaTestSection = () => {
  const { user } = useUser();

  return (
    <section className="beta-test-section">
      <div className="flex flex-col gap-4">
        <h1 className={"beta-test-heading"}>Beta test registration</h1>
        <p className={"beta-test-description  font-avenir"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        {user ? (
          <BetaTestListMeComponent name={user.name} email={user.email} />
        ) : (
          <BetaTestSignUpForm />
        )}
      </div>
      {user && <BetaTestUsersTable />}
    </section>
  );
};
