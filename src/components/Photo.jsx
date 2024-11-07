import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const Photo = ({ photo, removePhoto }) => {
    const [showModal, setShowModal] = useState(false);

    const handleRemove = () => {
        removePhoto(photo.id);
        setShowModal(false);
    };

    return (
        <>
            <Card className="shadow-sm mb-4">
                <Card.Img variant="top" src={photo.url} />
                <Card.Body>
                    <Card.Title>{photo.title}</Card.Title>
                    <Button
                        variant="danger"
                        onClick={() => setShowModal(true)}
                        className="d-flex align-items-center"
                    >
                        <FaTrash className="me-2" /> Remove
                    </Button>
                </Card.Body>
            </Card>

            {/* Confirmation Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove this photo?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleRemove}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Photo;