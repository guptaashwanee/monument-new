import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
const delimiterIconStyles = {
  width: "30px",
  height: "30px",
  backgroundSize: "75% 75%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  borderRadius: "none",
  backgroundImage: `url("/delimiter.svg")`,
};
const BeforeAndAfter = ({ image }) => {
  return (
    <ReactBeforeSliderComponent
      firstImage={{ imageUrl: image[0] }}
      secondImage={{ imageUrl: image[1] }}
      delimiterIconStyles={delimiterIconStyles}
    />
  );
};

export default BeforeAndAfter;
