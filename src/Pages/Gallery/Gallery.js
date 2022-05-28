import React from "react";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import CenteredModal from "../../Layouts/Modal/Modal";
import CustomCarousel from "../../Layouts/Carousel/Carousel";

import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from "react-bootstrap";

import './Gallery.css';
import images from "../../Assets/Config/images";

export default function Gallery() {
  const [modalShow, setModalShow] = React.useState(false);
  const [depImage, setDepImage] = React.useState(null);
  const [key, setKey] = React.useState(null);

  const lookSrcById = (key) => {
    setDepImage(images[key].portfolioImage);
    setKey(key);
    setModalShow(true);
  }

  return (
    <div>
      <Header/>
      <h2 className="title">WE ARE AKBAL</h2>
      <h5 className="title">DEFY THE LIMITS / GALERY</h5>
      <Container className="containerListImages">
        <Row xs={1} md={4}>
          {Object.keys(images).map(key => (
            <div key={key}>
              <Col className="image-list" onClick={() => { lookSrcById(key) }}>
                <Image src={images[key].portfolioImage} key={key} />
              </Col>
            </div>
          ))}
        </Row>
        <CenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          image={depImage}  
          imagekey={key}/>
      </Container>
      <CustomCarousel/>
      <Footer/>
    </div>
  );
}