import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Time from 'react-time'

export default function Dashboard(props) {
    const [src, setSrc] = useState(props?.user?.profileImg || '')
    const [user, setUser] = useState(props?.user || {})
    var review = 0
    if (user?.totReview !== 0) {
        review = Number(user?.sumReview) / Number(user?.totReview)
    }


    console.log('user', props.user, props.userType)
    const [favourites, setFavs] = useState(['English', 'Hindi'])
    const appointments = [{ course_name: 'fuck', tutor_name: 'Deep', student_name: 'Ddd', appointment_date: '05/13/2022', appointment_time: '17:30' }]
    const isTutor = props.userType === 'tutor'
    const hours = 6
    return (
        <>

            <div id="main_body">
                <h1>My Dashboard</h1>

                <div className="row">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src={'/images/' + src || '/images/profile_pic.png'} alt="Admin" className="rounded-circle p-1 bg-primary" width="110" />
                        <input id="photo-upload" type="file" placeholder="Change Profile photo" name="asd" onChange={(e) => {
                            e.preventDefault();
                            const reader = new FileReader();
                            const file = e.target.files[0];
                            console.log(file)
                            setSrc('/images/' + file.name)
                            //send image name to backend
                        }} />
                        <div className="mt-3">
                            <h4>{user.name}</h4>
                            <p className="text-secondary mb-1">{user.aboutMe}</p>
                            <p className="text-muted font-size-sm">rating: {review}</p>
                            <p className="text-muted font-size-sm"><strong>Total {isTutor ? 'tutoring hours - ' : 'studying hours - '} {String(user.totalHoursTaught)}</strong></p>
                        </div>
                    </div>
                </div>

                {favourites.length > 0 && !isTutor && <div className="row">
                    <div className="d-flex flex-column align-items-center text-center">
                        <div className="mt-3">
                            <h4>Your Favorites</h4>
                            {favourites.map((fav, idx) => <p className="text-secondary mb-1">{fav} <Button variant="danger" onClick={() => {
                                // remove this fav
                                var arr = favourites.filter(val => val !== fav);
                                setFavs(prev => arr)
                                //send api of updated favourites
                            }}>Delete</Button></p>)}
                        </div>
                    </div>
                </div>}

                <div className="row form-group">
                    <div className="d-flex flex-column align-items-center text-center">
                        <div className="col-md-6" style={{ border: "1px solid black" }}>
                            <h1>Upcoming Appointments: </h1>
                            {appointments.length > 0 ? <ul>
                                {appointments.map(app => (
                                    <li id="appointment">
                                        <h4>{app.course_name || 'Spanish'}</h4>
                                        <p>with {!isTutor ? app.tutor_name : app.student_name || 'blah'}</p>
                                        <p>Date and Time: {app.appointment_date + ' ' + app.appointment_time}</p>
                                    </li>
                                ))}
                            </ul> : 'None'}

                        </div>
                    </div>
                </div>


            </div></>
    )
}