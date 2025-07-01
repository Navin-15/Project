import Carousel from "react-bootstrap/Carousel";
import img1 from '/images/banner1.avif'
import img2 from '/images/banner2.jpg'
import img3 from '/images/banner3.avif'

function Slider() {
  return (
    <Carousel className="car  py-2 ">

      <Carousel.Item indicators={"false"} interval={3000} className="carousel-div">
        {/* <img className="carousel-1" src={img1} alt="" />  */}

        <div className="px-3">
            <img className="carousel-1" src={img1} alt="" />
        </div>

      </Carousel.Item>

      <Carousel.Item interval={1000} className="carousel-div">
        {/* <img className="carousel-1" src={img2} alt="" /> */}
       
        <div className="px-3"> 
          <img className="carousel-1" src={img2} alt="" />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={1000} className="carousel-div">
        {/* <img className="carousel-1" src={img3} alt="" /> */}

        <div className="px-3">
          <img className="carousel-1" src={img3} alt="" />
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;

