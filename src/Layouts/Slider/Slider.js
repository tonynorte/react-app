import SimpleImageSlider from "react-simple-image-slider";
import "./Slider.css";
// import logo from './logo.svg';

const images = [
  { url: "https://raw.githubusercontent.com/kimcoder/react-simple-image-slider/master/demo.gif" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

function Slider() {
  return (
    <div className="wrapper-slider">
      <SimpleImageSlider
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Slider;