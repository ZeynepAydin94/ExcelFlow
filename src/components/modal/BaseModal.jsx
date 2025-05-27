import { Modal } from "react-bootstrap";

const BaseModal = ({ show, onHide, title, children, footer }) => {
    return (
        <Modal show={show} onHide={onHide} centered>
            {title && (
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
            )}
            <Modal.Body>{children}</Modal.Body>
            {footer && <Modal.Footer>{footer}</Modal.Footer>}
        </Modal>
    );
};

export default BaseModal;