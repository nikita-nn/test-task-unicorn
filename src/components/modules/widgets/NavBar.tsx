import { useUser } from "../../../providers/UserProvider.tsx";
import { Link } from "react-router-dom";
import { ConnectAccountButton } from "./ConnectAccountButton.tsx";

/**
 * Навигационное меню для пользователя
 */

export const NavBar = () => {
  const { user } = useUser();
  return (
    <header className="header-main-page">
      <Link to={"/"}>
        <img src={"/pasteYourLogo.svg"} alt={"logo"} />
      </Link>
      {user && user.wallet ? (
        <p className={"navbar-wallet"}>{user.wallet}</p>
      ) : (
        <ConnectAccountButton />
      )}
    </header>
  );
};
