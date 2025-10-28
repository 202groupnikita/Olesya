import React from 'react';
import logo from './logo.svg';
import olga from './images/olga.jpg';
import number from "./images/number.png";
import whatsapp from "./images/whatsapp.png";
import telegram from "./images/telegram.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='content'>
        <div className='text'>
          <p>Меня зовут Ольга, и я шеф-повар кейтеринга Банкетные традиции. Моя цель – создавать не просто еду, а гастрономический опыт, который запомнится вашим гостям.</p>
        </div>
           <img src={olga} alt="Olga" className='photo'></img>        
      </div>
      <div className='header-down'>
        <text> Контакты </text>
        <img src={number} alt="number" className='num'></img>
        <img src={whatsapp} alt="whatsapp" className='wha'></img>
        <img src={telegram} alt="telegram" className='tel'></img>
      </div>
    </div>
  );
}

export default App;
