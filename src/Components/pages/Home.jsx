import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../Assets/BANNER 1.jpg";
import img2 from "../../Assets/BANNER 2.jpg";
import img3 from "../../Assets/BANNER 3.jpg";

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
