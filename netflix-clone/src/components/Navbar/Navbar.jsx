import React, { useState } from 'react'
import "./navbar.scss";
import { FaSearch } from "react-icons/fa";
import { MdOutlineNotificationsActive, MdArrowDropDownCircle } from "react-icons/md";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (
            window.onscroll = null
            );
    }

    console.log(isScrolled);
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="navbar-container">
                <div className="navbar-left">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                    >
                    </img>
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New & Popular</span>
                    <span>My List</span>
                    </div>
                <div className="navbar-right">
                    <FaSearch className="icon" />
                    <span>KID</span>
                    <MdOutlineNotificationsActive className="icon"/>
                    <img
                    src="https://www.pikpng.com/pngl/b/564-5641569_user-vector-user-flat-png-clipart.png"
                    alt="avatar"
                    />
                    <div className="profile">
                        <MdArrowDropDownCircle className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Sign Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
