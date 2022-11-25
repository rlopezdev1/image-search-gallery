import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

import './App.css';
import SearchIcon from './search.svg'







const API_URL = "https://api.unsplash.com/search/photos?client_id=2gyP-B-dFKjR--xGDsJZxMFIgoExPBHBvXFxY8NeeWU"


const App = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchImages = async (title) => {
    const response = await fetch(`${API_URL}&query=${title}`);
    const data = await response.json();

    setImages(data.results);
    
  
  }
  useEffect( () => {
    searchImages();
  }, [])
  

  return (
    <div className='app'>
      <h1>Image Search Gallery</h1>
      <div className='search'>
        <input
          placeholder='Search for Images'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchImages(searchTerm)}
        />


      </div>

      <div className='container'>
        {images.map((image) => (
          <ImageCard image={image} />
        ))}
        
        
      </div>



    </div>
  )

}


export default App;
