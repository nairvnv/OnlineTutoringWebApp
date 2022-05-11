import React from "react";
export default function PlanAccordian(props) {
    return (
        <>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed ironColor" type="button"
                        data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        {props.planName || ""}
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    {/* <!-- <div class="accordion-body"> --> */}
                    <div class="card extraCard">
                        <div class="card-body">
                            <p class="card-text">
                                <div class="list-group">
                                    <label class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox"
                                            value="checked" checked />
                                        Unlimited Courses!
                                    </label>
                                    <label class="list-group-item">
                                        <input class="form-check-input me-1" type="checkbox"
                                            value="checked" checked />
                                        Pay {props.planPayment  || ""} as you go!
                                    </label>
                                </div>
                            </p>
                            <a href="#" class="btn btn-primary">Only for $ {props.planPrice || ""}</a>
                        </div>
                    </div>
                    {/* <!-- </div> --> */}
                </div>
            </div>
        </>
    )
}