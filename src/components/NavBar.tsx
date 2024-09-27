import { useUser } from "../providers/UserProvider.tsx";

export const NavBar = () => {
  const { user } = useUser();

  return (
    <header className="header-main-page">
      <img src={"/pasteYourLogo.svg"} alt={"logo"} />
      {user && user.wallet ? (
        <div className={"overflow-ellipsis"}>
          <p className={"navbar-wallet"}>{user.wallet}</p>
        </div>
      ) : (
        <button className="connect-button">CONNECT METAMASK</button>
      )}
    </header>
  );
};
