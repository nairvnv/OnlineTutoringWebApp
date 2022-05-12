/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {
    console.log(props)
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
                <div style={{display:'flex', flexDirection:'row', }}>
                    <img src={'https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png'}/>
                    <div style={{padding:10, display:'flex', flexDirection:'column', }}>
                        <h4>{props.courseName} <strong>{props.rating}</strong></h4>
                        <p>
                            {props.aboutMe}
                        </p>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function TutorCards(props) {
    let { name = "ABC", courseName = "English", img, rating, location, aboutMe } = props
    const [modalShow, setModalShow] = useState(false);
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
            />
            <div class="col g-5">
                <div class="card extraCard">
                    <img src={'/images/english.jpg'} class="card-img-top" alt="English Course by XYZ" />
                    <div class="card-body">
                        <h5 class="card-title">{courseName} <blockquote>By {name}</blockquote>
                        </h5>
                        {/* <p class="card-text">{rating}/5</p> */}
                        <div style={{ display: 'flex', justifyContent: 'center', }}>
                            <a style={{ margin: 10 }} href="#" class="btn
                            btn-primary">Message</a>
                            <a href="#" style={{ margin: 10 }} onClick={() => { setModalShow(true) }} class="btn
                            btn-primary">Profile</a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default TutorCards