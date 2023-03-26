import React from 'react';
import ReactDOM from 'react-dom/client';

import { useState } from 'react';

import '../src/style/index.scss';
import FormTemplate from './components/App';
import Header from './components/Header';
import WelcomeScreen from './components/Welcome_screen';
import Menu_and_categories from './components/Menu_and_categories';

let Component = () => {
  const [playerName, setPlayerName] = useState("");

  const getUserName = (value) => {
    setPlayerName(value)
  }

return (
  <>
  <Header playerName={playerName}/>  
  <WelcomeScreen onClose={getUserName}/>
  
  </>
)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="main-flex">
      <Header />
    <Menu_and_categories />
    </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
