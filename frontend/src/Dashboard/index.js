import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Time from 'react-time'
import { DeleteFavorite, GetStudentAppointments, GetStudentFavourites, GetTutorAppointments } from "../ServerApi";

export default function Dashboard(props) {
    const [src, setSrc] = useState(props?.user?.profileImg || '')
    const [user, setUser] = useState(props?.user || {})
    var review = 0
    if (user?.totReview !== 0) {
        review = Number(user?.sumReview) / Number(user?.totReview)
    }



    const [favourites, setFavs] = useState([])
    const [appointments, setAppoint] = useState([])
    const isTutor = props?.userType === 'tutor'
    const hours = 6

    useEffect(() => {
        if (user && user?.type === 'tutor')
            GetTutorAppointments({ id: user?._id }).then(setAppoint)
        else if (user) {
            GetStudentAppointments({ id: user?._id }).then(setAppoint)
            GetStudentFavourites({ id: user?._id }).then((res)=>{setFavs(res);console.log('fac', res)})
            
        }

    }, [])
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
                            setSrc(file.name)
                        }} />
                        <div className="mt-3">
                            <h4>{user?.name}</h4>
                            <p className="text-secondary mb-1">{user?.aboutMe}</p>
                            {isTutor && <p className="text-muted font-size-sm">rating: {review}</p>}
                            <p className="text-muted font-size-sm"><strong>Total {isTutor ? 'tutoring hours - ' : 'studying hours - '} {  1}</strong></p>
                        </div>
                    </div>
                </div>

                {favourites.length > 0 && !isTutor && <div className="row">
                    <div className="d-flex flex-column align-items-center text-center">
                        <div className="mt-3">
                            <h4>Your Favorites</h4>
                            {favourites.map((fav, idx) => <p className="text-secondary mb-1">{fav} <Button variant="danger" onClick={() => {
                                var arr = favourites.filter(val => val !== fav);
                                setFavs(prev => arr)
                                DeleteFavorite({ id: user?._id, favorite: fav }).then(console.log)
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