import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

const CatImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchCatImage = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random Cat Image</h1>
      {imageUrl && <img src={imageUrl} alt="Random Cat" className={styles.image} />}
      <button onClick={fetchCatImage} className={styles.button}>Load New Image</button>
    </div>
  );
};

export default CatImage;