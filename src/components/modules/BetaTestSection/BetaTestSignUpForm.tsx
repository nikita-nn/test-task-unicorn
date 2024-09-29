import { useState } from "react";
import { useUser } from "../../../providers/UserProvider.tsx";
import { ConnectAccountButton } from "../widgets/ConnectAccountButton.tsx";
import { ErrorModal } from "../widgets/Modal.tsx";

/**
 * Форма регистрации на бета-тест.
 */

export const BetaTestSignUpForm = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const { user, editUser } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !emailPattern.test(email)) {
      return setIsModalOpen(true);
    }

    editUser("name", name);
    editUser("email", email);
    return;
  };

  return (
    <div className={"beta-test-form"}>
      <div className="flex flex-col gap-2">
        <label className={"beta-test-form-label"}>NAME</label>
        <input
          className={"main-input font-avenir"}
          id={"name"}
          placeholder={"We will display your name in participation list "}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className={"beta-test-form-label"}>EMAIL</label>
        <input
          disabled={!user?.wallet}
          className={"main-input font-avenir"}
          id={"email"}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={"We will display your email in participation list "}
        />
      </div>
      {user && user.wallet ? (
        <button className={"main-button"} onClick={() => onSubmit()}>
          Get early access
        </button>
      ) : (
        <div className="flex flex-col gap-5">
          <ConnectAccountButton />
          <p
            className={
              "beta-test-description text-[0.875rem] font-[700] uppercase tracking-wider"
            }
          >
            You need to connect wallet before registration
          </p>
        </div>
      )}
      <ErrorModal
        closeModal={() => setIsModalOpen(false)}
        data={"Error in your registration data, please re-check."}
        isOpen={isModalOpen}
      />
    </div>
  );
};
