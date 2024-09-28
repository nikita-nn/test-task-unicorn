import {BetaTestListMeComponent} from "../../widgets/BetaTestListMeComponent.tsx";
import {useUser} from "../../../providers/UserProvider.tsx";

export const BetaTestSection = () => {
    const {user, reloadUser} = useUser()
    reloadUser()

    if(!user){
        return <div>Loading...</div>
    }
    return (
        <section className="beta-test-section">
            <h1 className={"beta-test-heading"}>Beta test registration</h1>
            <p className={"beta-test-description  font-avenir"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.{" "}
            </p>
            <BetaTestListMeComponent name={user.name} email={user.email}/>
        </section>
    );
}