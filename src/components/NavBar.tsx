import { useUser } from "../providers/UserProvider.tsx";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { user } = useUser();

  return (
    <header className="header-main-page">
      <Link to={"/"}>
        <img src={"/pasteYourLogo.svg"} alt={"logo"} />
      </Link>
      {user && user.wallet ? (
        <Link to={"/clientarea"} className={"overflow-ellipsis"}>
          <p className={"navbar-wallet"}>{user.wallet}</p>
        </Link>
      ) : (
        <button className="main-button">CONNECT METAMASK</button>
      )}
    </header>
  );
};
