// components/Gallery.js
import React from 'react';
import Photo from './Photo';
import { Container, Row, Col } from 'react-bootstrap';


const Gallery = ({ photos, removePhoto }) => {
  return (
    <Container>
      <Row>
        {photos.map((photo) => (
          <Col key={photo.id} xs={12} sm={6} md={4} lg={3}>
            <Photo photo={photo} removePhoto={removePhoto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
