import { Carousel, Image } from "react-bootstrap";

import images from "../../Assets/Config/images";

function CustomCarousel() {
    return (
        <Carousel>
            {Object.keys(images).map(key => (
                <Carousel.Item>
                    <Image 
                        src={images[key].portfolioImage} 
                        key={key} 
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CustomCarousel;
