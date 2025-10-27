import React from 'react';
import logo from './logo.svg';
import olga from './images/olga.jpg'
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
    </div>
  );
}

export default App;
