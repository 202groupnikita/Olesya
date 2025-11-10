import React, { useState } from 'react';

interface ServiceProps {
  image: string;
  text: string;
  label: string;
  altText?: string;
  isMobile?: boolean;
}

const Service: React.FC<ServiceProps> = ({ image, text, label, altText = "", isMobile = false }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isMobile) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <div className="service-card-wrapper">
      <div 
        className={`hover-card ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        <img src={image} alt={altText} className="card-image" />
        <div className="card-text-overlay">
          {text}
        </div>
      </div>
      <div className="card-label">{label}</div>
    </div>
  );
};

export default Service;
