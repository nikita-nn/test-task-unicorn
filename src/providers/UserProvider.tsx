import React, {useEffect, useState} from "react";
import {IUserContext, User} from "../types/UserTypes.ts";

const UserContext = React.createContext<IUserContext | null>(null);


const mockUser: User = {
    wallet: "1337",
    name: "Nikita Arkhipov",
    email: "nikitaarkhipov55@gmail.com"
}

export const UserProvider = ({ children }: React.PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);
    const [trigger, setTrigger] = useState<boolean>(false);

    useEffect(() => {
        // TODO: User fetch logic, now using mock user simulating backend response
        setTimeout(()=>{
            setUser(mockUser)
        }, 4000)
    },[trigger])

    const reloadUser = () => setTrigger(!trigger);

    const editUser = () => {}

    return(
        <UserContext.Provider value={{user, reloadUser, editUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = React.useContext(UserContext);

    if(!context){
        throw new Error("useUser must be used within the context");
    }

    return context;
}