import React from 'react';
import Slider from "react-slick";
import logo from './logo.svg';
import olga from './images/olga.jpg';
import number from "./images/number.svg";
import whatsapp from "./images/whatsapp.svg";
import telegram from "./images/telegram.svg";
import rose from "./images/rose.svg";
import green from "./images/green.png";
import table from "./images/table.png";
import ProfileBlock from './ProfileBlock';
import './App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function App() {
   const settings = {
    dots: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1, 
  };
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

      <div className='header-down'>
        <text> Контакты </text>
        <img src={number} alt="number" className='contact'></img>
        <img src={whatsapp} alt="whatsapp" className='whatsapp'></img>
        <img src={telegram} alt="telegram" className='contact'></img>
      </div>
    </div>
  );
}

export default App;
