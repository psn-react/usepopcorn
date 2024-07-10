import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

import StarRating from './components/StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={3}  messages={['terrible','bad','ok','good','cool']} defaultRating={3}/>

    <StarRating maxRating={10} color="green" size="25" defaultRating={4}/>
    {/* <App /> */}
  </React.StrictMode>
);

