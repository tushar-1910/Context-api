import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = React.useState(false);
    const [tokenNo, setTokenNo] = React.useState();


    const toggleAuth = () => {
        setIsAuth(!isAuth);
        setTokenNo();
    };

    const getToken = async () => {
        try {
            let user = {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }

            let response = await fetch("https://reqres.in/api/login", {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { "content-type": "application/json" }
            });
            let res = await response.json();
            setTokenNo(res.token);
            setIsAuth(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ isAuth, toggleAuth, getToken, tokenNo }}>
            {children}
        </AuthContext.Provider>
    );
}