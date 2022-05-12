import React from "react";
import Accordion from 'react-bootstrap/Accordion'

export default function PlanAccordian(props) {
    return (
        <>
            <div className="accordion-item">
                <Accordion.Item eventKey={props.eventKey}>
                    <Accordion.Header>{props.planName || ""}</Accordion.Header>
                    <Accordion.Body>
                        <div className="card extraCard">
                            <div className="card-body">
                                <p className="card-text">
                                    <div className="list-group">
                                        <label className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox"
                                                value="checked" checked />
                                            Unlimited Courses!
                                        </label>
                                        <label className="list-group-item">
                                            <input className="form-check-input me-1" type="checkbox"
                                                value="checked" checked />
                                            Pay {props.planPayment || ""} as you go!
                                        </label>
                                    </div>
                                </p>
                                <a href="#" className="btn btn-primary">Only for $ {props.planPrice || ""}</a>
                            </div>
                        </div>  
                    </Accordion.Body>
                </Accordion.Item>
            </div>
        </>
    )
}


{/* <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed ironColor" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        {props.planName || ""}
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="card extraCard">
                        <div className="card-body">
                            <p className="card-text">
                                <div className="list-group">
                                    <label className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox"
                                            value="checked" checked />
                                        Unlimited Courses!
                                    </label>
                                    <label className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox"
                                            value="checked" checked />
                                        Pay {props.planPayment  || ""} as you go!
                                    </label>
                                </div>
                            </p>
                            <a href="#" className="btn btn-primary">Only for $ {props.planPrice || ""}</a>
                        </div>
                    </div>
                </div> */}