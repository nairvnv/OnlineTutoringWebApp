import React from "react";
import one from '../dashboard_images/profile_pic.png'
import two from '../dashboard_images/spanish_icon.jpg'
import three from '../dashboard_images/japanese_icon.jpg'
export default function Dashboard() {
    return (
        <>

            <div id="main_body">
                <h1>My Dashboard</h1>

                <div className="row">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src={one} alt="Admin" className="rounded-circle p-1 bg-primary" width="110"/>
                            <div className="mt-3">
                                <h4>Dwayne Johnson</h4>
                                <p className="text-secondary mb-1">Actor and Wrestler</p>
                                <p className="text-muted font-size-sm">Dallas, Texas, USA</p>
                            </div>
                    </div>
                </div>

                <div className="row form-group">
                    <div className="d-flex flex-column align-items-center text-center">
                        <div className="col-md-6" style={{border:"1px solid black"}}>
                            <h1>My Courses</h1>
                            <ul>
                                <li id="courses">
                                    <img src={two} height="200px" width="200px" />
                                    <h3>Spanish with Lisa</h3>
                                    <p>Tutor: Lisa Mathias</p>
                                </li>
                                <li id="courses">
                                    <img src={three} height="200px" width="200px" />
                                    <h3>Advanced Japanese Hiragana</h3>
                                    <p>Tutor: Naruto Uzumaki</p>
                                </li>
                            </ul>

                        </div>

                        <div className="col-md-6" style={{border:"1px solid black"}}>
                            <h1>Upcoming Appointments</h1>
                            <ul>
                                <li id="appointment">
                                    <h4>Advanced Japanese Hiragana</h4>
                                    <p>Tutor: Naruto Uzumaki</p>
                                    <p>Time and Date: 03/05/2022</p>
                                </li>

                                <li id="appointment">

                                    <h4>Hindi verbal and Indian culture</h4>
                                    <p>Tutor: Mansi Patel</p>
                                    <p>Time and Date: 03/14/2022</p>
                                </li>
                            </ul>

                        </div>





                    </div>
                </div>


            </div></>
    )
}