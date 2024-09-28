import { useUser } from "../../providers/UserProvider.tsx";
import { Planet } from "../../components/Planet.tsx";
import {NameEmailComponent} from "../../components/widgets/NameEmailComponent.tsx";

const ClientAreaView = () => {
  const { user, reloadUser } = useUser();
  reloadUser();
  if (!user) {
    return <div>Loading....</div>;
  }
  return (
    <main>
      <section>
        <h1 className={"clientarea-title"}>PErsonal data</h1>
        <div className={"clientarea-info-container"}>
         <NameEmailComponent email={user.email} name={user.name}/>
          <div>
            <label className={"clientarea-label"}>Wallet</label>
            <p className={"clientarea-data-text"}>{user.wallet}</p>
          </div>
        </div>
        <div className={"relative translate-x-[6rem] translate-y-[-20rem]"}>
          <Planet isClientArea={true} />
        </div>
      </section>
    </main>
  );
};

export default ClientAreaView;
