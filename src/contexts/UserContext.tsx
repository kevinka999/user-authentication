import { createContext, ReactNode, useState } from 'react';
import Router from 'next/router'
import axios from 'axios';

export interface UserSignupData {
    name: string;
    email: string;
    password: string;
}

export interface UserLoginData {
    email: string;
    password: string;
}

export interface UserData {
    name: string;
    email: string;
}

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextData {
    userName: string;   
    userEmail: string;
    signupUser: (UserSignupData) => void;
    loginUser: (UserLoginData) => void;
    logoutUser: () => void;
    updateUserInformation: (name, email) => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({children}: UserProviderProps) {
    const [ userName, setUserName ] = useState('');
    const [ userEmail, setUserEmail ] = useState('');

    async function signupUser(userInformation: UserSignupData) {
        await axios.post("http://localhost:3000/api/signup", userInformation)
            .then(response => alert(response.data.message))
            .catch(error => alert(error.data.message));
    }

    async function loginUser(userInformation: UserLoginData) {
        await axios.post("http://localhost:3000/api/login", userInformation)
            .then(response => {
                alert(response.data.message)
                Router.push('/')
            })
            .catch(error => console.log(error));
    }

    async function logoutUser() {
        await axios.post("http://localhost:3000/api/logout")
            .then(response => handleUserLogout())
            .catch(error => alert('Something went wrong, you will never logout anymore. Sorry.'))
    }

    const updateUserInformation = (name, email) => {
        setUserName(name);
        setUserEmail(email);
    }

    const handleUserLogout = () => {
        Router.push('/authentication')
        setUserName('')
        setUserEmail('')
        
        alert('User logged off with sucefully')
    }

    return(
        <UserContext.Provider value={{
            userName,
            userEmail,
            signupUser,
            loginUser,
            logoutUser,
            updateUserInformation,
        }}>
            {children}
        </UserContext.Provider>
    );
}