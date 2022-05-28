import { Modal, Image } from "react-bootstrap";
import "./Modal.scss";

function CenteredModal ({ show, onHide, image, imagekey }) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Title
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>
                <Image src={image} key={imagekey} />
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export default CenteredModal;
