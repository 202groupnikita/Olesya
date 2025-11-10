
import React from 'react';
import Slider from "react-slick";
import logo from './logo.svg';
import olga from './images/olga.jpg';
import number from "./images/number.svg";
import whatsapp from "./images/whatsapp.svg";
import telegram from "./images/telegram.svg";
import green from "./images/green.png";
import table from "./images/table.png";
import banquets from "./images/banquets.jpg";
import receptions from "./images/receptions.jpg";
import weddings from "./images/weddings.jpeg";
import lunches from "./images/lunches.jpeg";
import pie from "./images/pie.jpg";
import ProfileBlock from './ProfileBlock';
import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service from './Service';

const profiles = [
  {
    text: "Меня зовут Ольга, и я шеф-повар кейтеринга Банкетные традиции. Моя цель – создавать не просто еду, а гастрономический опыт, который запомнится вашим гостям.",
    photo: olga
  },

  {
    text: "Элегантные банкеты Корпоративные обеды Праздничные фуршеты Авторские блюда для любого случая",
    photo: table
  },
    {
    text: "Высокий уровень сервиса Изысканное меню на любой вкус Профессиональные повара Индивидуальный подход",
    photo: green
  },

]

interface ServiceProps {
  imageUrl: string;
  text: string;
  altText?: string;
}

function App() {
  const settings = {
  dots: true,
  infinite: true, 
  speed: 500,
  slidesToShow: 1, 
  slidesToScroll: 1, 
};

const hoverCards = [
  {
    image: weddings,
    text: "Ваш идеальный день — от закусок до десерта",
    label: "Свадьбные торжества",
    altText: "Свадебный банкет"
  },
  {
    image: receptions,
    text: "Элегантно, вкусно, без границ — для любого события",
    label: "Фуршеты",
    altText: "Фуршетный стол"
  },
  {
    image: lunches,
    text: "Горячие, сытные, вовремя — для офиса или дома",
    label: "Обеды",
    altText: "обед"
  },
  {
    image: pie,
    text: "Теплые, ароматные, с любовью — прямо к вам",
    label: "Доставка пирогов",
    altText: "Пироги"
  },
  {
    image: banquets,
    text: "Масштабно, роскошно, по вашему вкусу",
    label: "Банкеты",
    altText: "Праздничный банкет"
  },
];

  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    
    <div className="slider-container">
    <Slider {...settings}>
      {profiles.map((profile, index) => (
        <div key={index}>
          <ProfileBlock 
            text={profile.text} 
            photo={profile.photo} 
          />
        </div>
      ))}
    </Slider>
  </div>


<div className="additional-content">
  <div className="cards-container">
    <h2 className="section-title">Наши услуги</h2>
  
  {/* Верхний ряд: 3 карточки */}
  <div className="cards-row">
    {hoverCards.slice(0, 3).map((card, index) => (
      <Service
        key={index}
        image={card.image}
        text={card.text}
        label={card.label}
        altText={card.altText}
      />
    ))}
    <h3>Меню</h3>
  </div>
</div>

  {/* Нижний ряд: 2 карточки */}
  <div className="cards-row">
    {hoverCards.slice(3, 5).map((card, index) => (
      <Service
        key={index + 3}
        image={card.image}
        text={card.text}
        label={card.label}
        altText={card.altText}
      />
    ))}
  </div>
</div>


  <div className='header-down'>
  <text> Контакты </text>
  <a href="tel:+79991234567" className='contact'>
    <img src={number} alt="number" />
  </a>
  <a href="https://wa.me/79991234567" className='whatsapp'>
    <img src={whatsapp} alt="whatsapp" />
  </a>
  <a href="https://t.me/jj_wx0" className='contact'>
    <img src={telegram} alt="telegram" />
  </a>
 </div>
</div>
  );
}

export default App;
