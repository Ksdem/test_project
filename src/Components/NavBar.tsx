import React from "react";
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <div className="nav_bar">
            <NavLink to="/users" className="di" >Пользователи</NavLink>
            <NavLink to="/posts" className="di">Посты</NavLink>
            <NavLink to="/album" className="di">Альбомы</NavLink>


        </div>);

}

export default NavBar;