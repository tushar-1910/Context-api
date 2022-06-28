import React from 'react';
import { AuthContext } from '../context/AuthContext';
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  background: black;
  color: white;
`;

const Navbar = () => {
    const { isAuth } = React.useContext(AuthContext);
    const { toggleAuth } = React.useContext(AuthContext);
    const { getToken } = React.useContext(AuthContext);
    return (
    <NavbarWrapper>
        {
            isAuth ?
                <button onClick={()=>{toggleAuth()}}>Logout</button> :
                <button onClick={()=>{getToken()}}>Login</button>
        }
    </NavbarWrapper>
    )
}

export default Navbar;