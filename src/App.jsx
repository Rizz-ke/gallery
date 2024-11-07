// App.js
import React, { useState } from 'react';
import Gallery from './components/Gallery';
import AddPhoto from './components/AddPhotos';
import './styles.css';

function App() {
  const [photos, setPhotos] = useState([
    { id: 1, url: 'https://images.pexels.com/photos/28958104/pexels-photo-28958104/free-photo-of-stunning-sunset-over-lake-powell-in-utah.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'Beautiful Landscape' },
    { id: 2, url: 'https://images.pexels.com/photos/17960031/pexels-photo-17960031/free-photo-of-tenements-near-canal-in-amsterdam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', title: 'City Nightscape' },
  ]);

  const addPhoto = (newPhoto) => {
    setPhotos([...photos, newPhoto]);
  };

  const removePhoto = (id) => {
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  return (
    <div className="container text-center my-5">
      <h1 className="display-4 text-primary mb-4">Photo Gallery</h1>
      <AddPhoto addPhoto={addPhoto} />
      <Gallery photos={photos} removePhoto={removePhoto} />
    </div>
  );
}

export default App;
