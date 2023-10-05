import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Card, Image } from "react-bootstrap";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carouselCustom.css';
import { GrSchedules } from 'react-icons/gr';

const CarouselCustom = ({ cards }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const translateXAdjustment = -155;

  const handleBeforeSlideChange = (oldIndex, newIndex) => {
    console.log(oldIndex)
    setActiveSlideIndex(newIndex);
  };

  const customStyles = {
    transform: `translate3d(${translateXAdjustment}%, 0, 0)`,
  };

  const settings = {
    dots: false,
    className: "center",
    infinite: false,
    centerMode: true,
    centerPadding: '10%', // Adjust this value as needed
    slidesToShow: 3, // Adjust this value as needed
    swipeToSlide: true,

    beforeChange: handleBeforeSlideChange,
  }
 
  return (
    <div className="carousel-container">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index}>
              <div className="card-carousel" style={customStyles}>
                <Card>
                  <div className="images">
                    <div className="backgroud-image">
                      <Card.Img src="https://img.redbull.com/images/c_crop,x_592,y_0,h_3442,w_4016/c_fill,w_430,h_358/q_auto,f_auto/redbullcom/2023/1/23/jnrf5t5p5gpzsljg4wos/vamos-a-holanda" alt="placeholder" />
                    </div>
                    <div className='hover-image'>                
                      <Card.Img src="https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_386/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2020/2/12/gzg8dyskmvw8vtfstycg/circuit-zandvoort" alt="placeholder" />
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className='my-2'>
                      Gran premio de los Países Bajos
                    </Card.Title>
                    <Card.Subtitle className='my-2'>
                      <GrSchedules />
                      <span className='mx-1'>
                      25 - 27 Agosto 2023
                      </span>
                    </Card.Subtitle>
                    <Card.Text>
                      <Image src="https://resources.redbull.com/icons/flags/v2/NL@2x.png" alt="placeholder" className='image-flag'/>
                      <span className='mx-1'>
                      Circuito Zandvoort, Netherlands
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
                
              </div>
            </div>
          ))}
        </Slider>
    </div>
  );
};

export default CarouselCustom;
