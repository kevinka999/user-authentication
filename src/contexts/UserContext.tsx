import { createContext, ReactNode, useState } from 'react';

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextData {
    isLogged: boolean;
    userName: string;
    signupUser: () => void;
    loginUser: () => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({children}: UserProviderProps) {
    const [ isLogged, setIsLogged ] = useState(false);
    const [ userName, setUserName ] = useState('Kevin Katzer');

    const signupUser = () => {}
    const loginUser = () => {}

    return(
        <UserContext.Provider value={{
            isLogged,
            userName,
            signupUser,
            loginUser,
        }}>
            {children}
        </UserContext.Provider>
    );
}