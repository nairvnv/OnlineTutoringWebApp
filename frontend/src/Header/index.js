import React from "react";
import { Link, useHistory } from "react-router-dom";
import './index.css'
function Header() {
    const navigate = useHistory()
    return (
        <nav className="navbar navbarCustomStyle navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid p-0">
                <img className="navbar-brand imgBorderCut" src={'/images/tutorlogo2.png'} width="250px" onClick={()=>{ navigate.push('/')}}/>
                <button className="navbar-toggler customHamburger" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav customTextWhite">
                        <li className="nav-item">
                            <Link className="nav-link customTextWhite" to={"/browse"}>Browse Course</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link customTextWhite" to={"/dashboard"}>My DashBoard </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link customTextWhite" href="#">About us </a>
                        </li>

                    </ul>
                </div>
                <div className="collapse navbar-collapse paddingRight" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                            Login
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to={"/register"} className="nav-link">
                            SignUp
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header