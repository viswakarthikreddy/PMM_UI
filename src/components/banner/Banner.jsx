import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from './images/banner1.jpg'

const Banner  = () => (
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={banner}
            alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
);

export default Banner;