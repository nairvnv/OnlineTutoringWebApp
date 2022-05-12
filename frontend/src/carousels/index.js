import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel style={{border:'10px solid black', width: '80%'}} activeIndex={index} onSelect={handleSelect}>
            {props.carouselItems.map(carItem => {
                return (
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-150"
                            src={'https://transpanish.biz/wp-content/uploads/2016/05/spanish-language.jpg'}
                        />
                        {carItem.caption ? <Carousel.Caption>
                            <h3>{carItem.captionHeading}</h3>
                            <p>{carItem.captionDesc}</p>
                        </Carousel.Caption> : <></>}
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

export default ControlledCarousel