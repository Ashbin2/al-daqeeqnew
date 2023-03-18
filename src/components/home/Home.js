import React from 'react'
import {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'
const Home = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} id='show_bg_2'>
      <Carousel.Item className="carsl">
        <img
          className="d-block w-100"
          src="./images/img1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>AL DAQEEQ</h2>
          <p>Industrial Plant Equipment & spare Parts Trading LLC</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carsl">
        <img
          className="d-block w-100"
          src="./images/img2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h2>AL DAQEEQ</h2>
          <p>Industrial Plant Equipment & spare Parts Trading LLC</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel> 
  )
}

export default Home;
