import React from "react";
import PlanAccordian from "./planList";
import Accordion from 'react-bootstrap/Accordion'
import ControlledCarousel from "../carousels";
import carouselData from '../carouselData'
export default function Home() {
    return (
        <>
            <div style={{ marginTop: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ControlledCarousel
                    carouselItems={carouselData}
                />
            </div>

            <div style={{ display: 'flex', margin: 10, justifyContent: 'center' }}>
                <h4>Browse our plans!</h4>
            </div>
            <div style={{ display: 'flex', margin: 10, justifyContent: 'center' }}>
                <hr />
                <Accordion>
                    <PlanAccordian eventKey={'0'} planName={'Iron'} planPrice={'6.99'} planPayment={'Monthly'} />
                    <PlanAccordian eventKey={'1'} planName={'Bronze'} planPrice={'10.99'} planPayment={'Quarterly'} />
                    <PlanAccordian eventKey={'2'} planName={'Gold'} planPrice={'15.99'} planPayment={'Yearly'} />
                </Accordion>


            </div>
            
            <div id="testimonials" className="jumbotron" style={{fontWeight: "700"}}>
                <div className="row">
                    <div className="col-md-4 text-center" style={{background: "rgb(182, 182, 182)"}}>
                        <img src="/images/testimonial1.png" className="rounded-circle" width="100" height="100" />
                        {/* <h5 style="font-weight: 800;" className="mb-0">Sophia Tereshkova</h5> <span>Software Developer</span> */}
                        <p>"Michael has taught my son since this summer. He is very experienced and
                            knowledgeable. He keeps his lesson effective, engaging and fun. My son is able to
                            stay focused and already speaks better Japanese than most of his peers."</p>
                    </div>
                    <div className="col-md-4 text-center col-md-offset-2" style={{ background: "rgb(139, 139, 139)" }}>
                        <img src="/images/testimonial2.png" className="rounded-circle" width="100" height="100" />
                        {/* <h5 className="mb-0" style="font-weight: 800;">Dwayne Johnson</h5> <span>Actor</span> */}
                        <p>"Jeremy is excellent. Everytime a new movie comes around and needs me to learn a new
                            language, Jeremy knows it all!! He is one of the most knowledgeable language tutors
                            I have ever experienced"</p>
                    </div>
                    <div className="col-md-4 text-center col-md-offset-2" style={{background: "rgb(182, 182, 182)"}}>
                        <img src="/images/testimonial1.png" className="rounded-circle" width="100" height="100" />
                        <div className="user-content">
                            {/* <h5 className="mb-0" style="font-weight: 800;">Sania Mirza</h5> <span>International Tennis Player</span> */}
                            <p>"I wanted to learn basics of Spanish in a month before my Barcelona trip and Esther
                                has been so effective and helpful at teaching me within such a short duration. My
                                tutoring session went exceptionally well"</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}