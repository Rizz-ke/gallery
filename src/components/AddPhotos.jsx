import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddPhoto = ({ addPhoto }) => {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (url && title) {
            addPhoto({ id: Date.now(), url, title });
            setUrl('');
            setTitle('');
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-4 d-flex flex-column align-items-center">
            <Form.Group controlId="formBasicEmail" className="w-100">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter image URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="w-100">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter photo title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            {/* Centered button */}
            <div className="d-flex justify-content-center w-100">
                <button type="submit">
                    <span className="text">Add Photo</span>
                </button>
            </div>
        </Form>
    );
};

export default AddPhoto;