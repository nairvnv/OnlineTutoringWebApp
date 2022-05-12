import React from "react";
import PlanAccordian from "./planList";
import Accordion from 'react-bootstrap/Accordion'
import ControlledCarousel from "../carousels";
import carouselData from '../carouselData'
export default function Home() {
    return (
        <>
            <div style={{ display: 'flex', margin: 10, justifyContent: 'center' }}>
                <h4>Browse our plans!</h4>
            </div>
            <div style={{ display: 'flex', margin: 10, justifyContent: 'center' }}>
                <hr />
                <Accordion>
                    <PlanAccordian eventKey={'0'} planName={'Iron'} planPrice={'6.99'} planPayment={'Monthly'} />
                    <PlanAccordian eventKey={'1'} planName={'Bronze'} planPrice={'10.99'} planPayment={'Quaterly'} />
                    <PlanAccordian eventKey={'2'} planName={'Gold'} planPrice={'15.99'} planPayment={'Yearly'} />
                </Accordion>


            </div>
            <div style={{ marginTop: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ControlledCarousel
                    carouselItems={carouselData}
                />
            </div>
        </>
    )
}