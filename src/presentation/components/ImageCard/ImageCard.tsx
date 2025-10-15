import React from 'react';
import styles from './ImageCard.module.scss';
import familyImage from '/family_img.png'; // Asegúrate de tener la imagen en src/assets

const ImageCard: React.FC = () => {
  return (
    <div  className={styles.imageCard}>
      <img src={familyImage} alt="Familia feliz" className={styles.image} />
    </div>
  );
};

export default ImageCard;