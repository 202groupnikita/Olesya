import { useState } from "react";

interface ServiceProps {
    image: string;
    text: string;
    altText:string;
}

const Service: React.FC<ServiceProps> = ({ image, text, altText = "Image" }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='Service'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
 <div className={`card-content ${isHovered ? 'hovered' : ''}`}>
        {/* Кнопка-фотография */}
        <div className="card-image">
          <img src={image} alt={altText} />
        </div>
        {/* Текст появляется при наведении */}
        <div className="card-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
    )
};

export default Service;