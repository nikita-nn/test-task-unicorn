import { useUser } from "../../providers/UserProvider.tsx";
import {Planet} from "../../components/Planet.tsx";

const ClientAreaView = () => {
  const { user, reloadUser } = useUser();
  reloadUser();

  if (!user) {
    return <div>Loading</div>;
  }

  return (
    <main>
      <section>
        <h1 className={"clientarea-title"}>PErsonal data</h1>
        <div className={"clientarea-info-container"}>
          <div>
            <label className={"clientarea-label"}>Name</label>
            <p className={"clientarea-data-text"}>{user.name}</p>
          </div>
          <div>
            <label className={"clientarea-label"}>Email</label>
            <p className={"clientarea-data-text"}>{user.email}</p>
          </div>
          <div>
            <label className={"clientarea-label"}>Wallet</label>
            <p className={"clientarea-data-text"}>{user.wallet}</p>
          </div>
        </div>
        <div className={"relative translate-x-[6rem] translate-y-[-20rem]"}>
          <Planet isClientArea={true}/>
        </div>
      </section>
    </main>
  );
};

export default ClientAreaView;
