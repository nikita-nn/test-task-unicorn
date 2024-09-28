import {NameEmailComponent} from "./NameEmailComponent.tsx";

export const BetaTestListMeComponent = ({name, email}: {name: string , email: string}) =>(
        <div className={"mt-8 flex flex-col gap-5"}>
           <NameEmailComponent name={name} email={email} />
            <button className={"main-button"}>List me to the table</button>
        </div>
    )
