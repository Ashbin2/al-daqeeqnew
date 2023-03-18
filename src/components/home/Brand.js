import React from 'react'

import Slider from "react-slick";

const Brand = () => {
    var settings = {
        
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return (
        <div className='brand'>
          
          <Slider {...settings}>
            <div>
              <img src="./images/s-7.png" alt="" />
            </div>
            <div>
            <img src="./images/s-2.png" alt="" />
            </div>
            <div>
            <img src="./images/s-3.png" alt="" />
            </div>
            <div>
            <img src="./images/s-4.png" alt="" />
            </div>
            
            <div>
            <img src="./images/s6.jfif" alt="" />
            </div>
            <div>
            <img src="./images/s-7.png" alt="" />
            </div>
            <div>
            <img src="./images/s-8.jpg" alt="" />
            </div>
            <div>
            <img src="./images/s-10.jpg" alt="" />
            </div>
            <div>
            <img src="./images/s-9.jpg" alt="" />
            </div>
            <div>
            <img src="./images/s-11.png" alt="" />
            </div>
            <div>
            <img src="./images/s-12.jpg" alt="" />
            </div>
            <div>
            <img src="./images/s-15.png" alt="" />
            </div>
            <div>
            <img src="./images/s-14.jpg" alt="" />
            </div>
          </Slider>
        </div>
      );
  
}

export default Brand
