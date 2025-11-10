// Service.tsx
import React from 'react';

interface ServiceProps {
  image: string;
  text: string;          // текст, который появляется при наведении
  label: string;         // подпись под карточкой (всегда видна)
  altText?: string;
}

const Service: React.FC<ServiceProps> = ({ image, text, label, altText = "" }) => {
  return (
    <div className="service-card-wrapper">
      <div className="hover-card">
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