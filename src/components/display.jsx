import React from 'react';
import {AuthContext} from "../context/AuthContext";

const Display = () => {
    const {tokenNo} = React.useContext(AuthContext);
    const {isAuth} = React.useContext(AuthContext);

    return (
        isAuth ? <h1>{`tokenNo is ${tokenNo} and Status is ${isAuth}`}</h1>
        : <h1>{`Status is ${isAuth}`}</h1>
    )

}

export default Display;