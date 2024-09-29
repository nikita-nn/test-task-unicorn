import { BetaTestListMeComponent } from "../../widgets/BetaTest/BetaTestListMeComponent.tsx";
import { useUser } from "../../../providers/UserProvider.tsx";
import { BetaTestSignUpForm } from "../../widgets/BetaTest/BetaTestSignUpForm.tsx";
import { BetaTestUsersTable } from "../../widgets/BetaTest/BetaTestUsersTable.tsx";

/**
 * Секция бета-тестирования мета-вселенной.
 */

export const BetaTestSection = () => {
  const { user } = useUser();

  return (
    <section className="beta-test-section">
      <div className="flex flex-col gap-4">
        <h1 className={"beta-test-heading"}>Beta test registration</h1>
        <p className={"beta-test-description font-avenir"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        {user && user.name && user.email ? (
          <BetaTestListMeComponent name={user.name} email={user.email} />
        ) : (
          <BetaTestSignUpForm />
        )}
      </div>
      {user && <BetaTestUsersTable />}
    </section>
  );
};
