import React from "react";
import './index.css'

function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-3">

            <div className="container text-center text-md-left">

                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold" style={{textDecoration: 'None'}}>Tutor Hub</h5>
                        <p>One and only stop for learing various launages. we providce more that 150+ languges with
                            experts in the industry</p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold" style={{textDecoration: 'None'}}>Useful links</h5>
                        <p>
                            <a href="/" className="text-white" style={{textDecoration: 'None'}}>t</a>
                        </p>
                        <p>
                            <a href="/" className="text-white" style={{textDecoration: 'None'}}>Login</a>
                        </p>
                        <p>
                            <a href="/" className="text-white" style={{textDecoration: 'None'}}>SignUp</a>
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold" style={{textDecoration: 'None'}}>Contact</h5>
                        <p style={{fontSize:"small"}}>
                            <i className="bi bi-house"></i> 7575 FrankFord Rd, Dallas
                        </p>
                        <p style={{fontSize:"small"}}>
                            <i className="bi bi-envelope"></i> xyz@gmail.com
                        </p>
                        <p style={{fontSize:"small"}}>
                            <i className="bi bi-telephone"></i> +1 2489164252
                        </p>

                    </div>

                </div>
                <hr className="mb-4" />
                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-white" style={{display: "inline"}}>copyright @2022 All rights reseverd by:</p>
                        <a href="/" style={{textDecoration: "none"}}><strong>Tutor Hub</strong> </a>
                    </div>


                    <div className="col-md-5 col-lg-4 pt-2">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="/" className="btn-floating btn-sm text-white" style={{fontSize: 'medium'}}><i
                                        className="bi bi-facebook"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/" className="btn-floating btn-sm text-white" style={{fontSize: 'medium'}}><i
                                        className="bi bi-instagram"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/"  className="btn-floating btn-sm text-white" style={{fontSize: 'medium'}}><i
                                        className="bi bi-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer