import React from 'react';
import './ImageCard.css'; // For styling

const ImageCard = ({ imageUrl, title, description }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default ImageCard;
