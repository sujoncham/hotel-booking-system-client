import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gallery1 from '../../assets/image/gallery1.jpg';
import gallery2 from '../../assets/image/gallery2.jpg';
import gallery3 from '../../assets/image/gallery3.jpg';
import gallery4 from '../../assets/image/gallery4.jpg';
import gallery5 from '../../assets/image/gallery5.jpg';

const LocationGallery = () => {
    return (
        <Carousel autoPlay={true} showArrows={true} >
                <div>
                    <img src={gallery1} alt='' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={gallery2} alt='' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={gallery3} alt='' />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={gallery4} alt='' />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={gallery5} alt='' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default LocationGallery;