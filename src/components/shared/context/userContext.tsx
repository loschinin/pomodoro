import React, {FC} from "react";
import useUserData from "../../../hooks/useUserData";

export interface IUserContextData {
    name?: string;
    icon_img?: string;
}

export const userContext = React.createContext<IUserContextData>({})

export const UserContextProvider:FC = ({children}) => {
    const [data] = useUserData()
    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}