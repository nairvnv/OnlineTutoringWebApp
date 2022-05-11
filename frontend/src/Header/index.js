import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../home_images/tutorlogo2.png'
import '../index.css'
function Header() {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbarCustomStyle navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid p-0">
                <img className="navbar-brand imgBorderCut" src={logo} width="250px" onClick={()=>{ navigate('/')}}/>
                <button className="navbar-toggler customHamburger" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav customTextWhite">
                        <li className="nav-item">
                            <NavLink className="nav-link customTextWhite" to={"/browse"}>Browse Course</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link customTextWhite" to={"/dashboard"}>My DashBoard </NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link customTextWhite" href="#">About us </a>
                        </li>

                    </ul>
                </div>
                <div className="collapse navbar-collapse paddingRight" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link customTextWhite" href="#">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link customTextWhite" href="#">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header