/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CommentsBlock from 'simple-react-comments';
import Rating from 'react-rating';
import TimeKeeper from 'react-timekeeper';
import moment from 'moment';
import DatePicker from 'react-date-picker';
import { AppendFavorites } from '../ServerApi';

function MyVerticallyCenteredModal(props) {
    const [tutorComments, setComments] = useState([])
    const [comment, setComment] = useState('')
    function getReviewsAndComments() {
        // get Reviews
        // get Comments
    }
    function sendComment() {
        setComments(prev => [...prev, { id: 123, comment, name: 'DemoUser' }])
        //add api here using comment as text
        setComment('')
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.name}'s profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: 'flex', flexDirection: 'row', }}>
                    <img src={'https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png'} height={150} />
                    <div style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h4>{props.courseName}
                            <strong style={{ marginTop: 15, display: 'flex' }}>
                                Rating:
                                <div>
                                    <Rating
                                        start={0}
                                        step={1}
                                        stop={5}
                                        initialRating={props.rating || 0}
                                        fractions={1}
                                    />
                                </div>
                            </strong>
                        </h4>
                        <p>
                            {props.aboutMe}
                        </p>
                        <div id='comments' style={{}}>
                            <input
                                width={'100%'}
                                placeholder='Enter you review here'
                                value={comment}
                                onChange={(text) => { setComment(text.target.value) }} />
                            <Button variant="secondary" style={{ marginLeft: 10 }} onClick={() => sendComment()}>Send</Button>
                            {tutorComments.length > 0 && <div style={{ marginTop: 10, }}>
                                <h3>Reviews about {props.name}</h3>
                                {tutorComments.map((com) => {
                                    return (<div key={() => { new Date() }}>
                                        <span>
                                            <h5>{com.name}</h5>
                                            <p>{com.comment}</p>
                                        </span>
                                    </div>)
                                })}
                            </div>}
                        </div>
                    </div>
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


function TimeModal(props) {
    const [time, setTime] = useState('18:00')
    const [date, onChangeDate] = useState(new Date());
    let maxiDate = new Date();
    maxiDate.setDate(new Date().getDate + 7)
    useEffect(() => {
        console.log(date)
    }, [date])
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <div style={{ height: 250, zIndex: 5555 }}>
                        <DatePicker
                            onChange={onChangeDate}
                            value={date}
                            maxDate={maxiDate}
                            minDate={new Date()}
                        />
                    </div>

                    <TimeKeeper
                        switchToMinuteOnHourDropdownSelect
                        time={time}
                        onChange={(data) => setTime(data.formatted24)}
                    />
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={() => {
                    //send appointment details
                    alert(String(time))
                    props.onHide()
                }}>Check and Set</Button>
            </Modal.Footer>
        </Modal>
    );
}

function TutorCards(props) {
    let { name = "ABC", courseName = "English", img, rating, location, aboutMe, comments = [], userLoggedIn } = props
    const [modalShow, setModalShow] = useState(false);
    const [timerModal, setTimeModal] = useState(false);
    const [user, setUser] = useState(props?.user)
    console.log(img)
    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                name={name}
                courseName={courseName}
                img={img}
                rating={rating}
                location={location}
                aboutMe={aboutMe}
                comments={comments}
            />
            <TimeModal
                show={timerModal}
                onHide={() => setTimeModal(false)}
                name={'Set Time for appoinment with' + name}
            />

            <div className="col g-5">
                <div className="card extraCard">
                    <img src={'/images/english.jpg'} className="card-img-top" alt="English Course by XYZ" />
                    <div className="card-body">
                        <h5 className="card-title">{courseName} <blockquote>By {name}</blockquote>
                        </h5>
                        {/* <p className="card-text">{rating}/5</p> */}
                        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                            <a href="#" style={{ margin: 10 }} onClick={() => { setTimeModal(true) }} className="btn
                            btn-primary">Schedule</a>

                            <a href="#" style={{ margin: 10 }} onClick={() => { setModalShow(true) }} className="btn
                            btn-primary">Profile</a>
                            {!userLoggedIn && <a href="#" style={{ margin: 10 }} onClick={() => {
                                AppendFavorites({ id: user._id, favorites: courseName })
                            }} className="btn
                            btn-primary">Add to Favorites</a>}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default TutorCards