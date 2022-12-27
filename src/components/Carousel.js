import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Carousel.css"
import { Carousel as CarouselMenu } from 'react-bootstrap';
import {images}  from "./CarouselImg";

function Carousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCurrent((current) => (current >= images.length - 1 ? 0 : current + 1));
    }, 3000);
  }, [current]);
  return (
    <div className="sliderbg">
      <div className="container">

        <CarouselMenu>
          <CarouselMenu.Item>
            <Link to="#">
            <img
              className="carousel-image"
              src={images[0].img}
              alt="First slide"
            />
            <CarouselMenu.Caption>
              <h3 className="heading">Starters 70</h3>
              <p className="desc">Starters 70 , a beginner-level coding contest , is on Dec 21st , 8 PM To 11 PM IST.</p>
            </CarouselMenu.Caption></Link>
          </CarouselMenu.Item>
          <CarouselMenu.Item>
            <Link to="#">
            <img
              className="carousel-image"
              src={images[1].img}
              alt="Second slide"
            />
            <CarouselMenu.Caption>
              <h3 className="heading">Codechef For Colleges</h3>
              <p className="desc">Improve the coding culture in your college with help of DSA focused learning program.</p>
            </CarouselMenu.Caption></Link>
          </CarouselMenu.Item>
          <CarouselMenu.Item>
          <Link to="#">
            <img
              className="carousel-image"
              src={images[2].img}
              alt="Third slide"
            /><br /><br />
            <CarouselMenu.Caption>
              <h3 className="heading">Codechef Pro</h3>
              <p className="desc">Now Share your codechef subscription with your friends and fellow coders</p>
            </CarouselMenu.Caption>
            </Link>
          </CarouselMenu.Item>
          <CarouselMenu.Item>
          <Link to="#">
            <img
              className="carousel-image"
              src={images[3].img}
              alt="fourth slide"
            /><br /><br />
            <CarouselMenu.Caption>
              <h3 className="heading">Codechef Games</h3>
              <p className="desc">Enjoy 1v1 coding challenges with much more fun in an alternate compete learn environment</p>
            </CarouselMenu.Caption>
            </Link>
          </CarouselMenu.Item>
          <CarouselMenu.Item>
          <Link to="#">
            <img
              className="carousel-image"
              src={images[4].img}
              alt="fifth slide"
            />
            <CarouselMenu.Caption>
              <h3 className="heading">Stay Abroad Counselling</h3>
              <p className="desc">Book free Stay Abroad Counselling session and get guidance from iSchoolConnect</p>
            </CarouselMenu.Caption>
            </Link>
          </CarouselMenu.Item>
        </CarouselMenu>
      </div>
    </div>
  );
}

export default Carousel