import React from "react";
import PlanAccordian from "./planList";
export default function Home() {
    return (
        <div className="container" style={{ margin: 50 }}>
            <PlanAccordian planName={'Iron'} planPrice={'6.99'} planPayment={'Monthly'} />
            <PlanAccordian planName={'Bronze'} planPrice={'10.99'} planPayment={'Quaterly'} />
            <PlanAccordian planName={'Gold'} planPrice={'15.99'} planPayment={'Yearly'} />
        </div>
    )
}