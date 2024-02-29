import { createContext, useState } from "react";

export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {
    const [userInfo, SetUserInfo] = useState({})


    return (
        <UserContext.Provider value={{userInfo, SetUserInfo}}>
            { children }
        </UserContext.Provider>
    )
}
