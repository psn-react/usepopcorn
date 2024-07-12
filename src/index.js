import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// import './index.css';
// import App from './App';

import StarRating from './components/StarRating';

function Test(){
  const [userRating, setRating] = useState(0);
  return <div>
    <StarRating color="purple" size={30} maxRating={5} userSetRating={setRating} />
    <p>This movie is rated {userRating} stars.</p>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5}  messages={['terrible','bad','ok','good','cool']} />

    <StarRating maxRating={10} color="green" size={25} defaultRating={4}/>

    <Test/>

    {/* <App /> */}
  </React.StrictMode>
);

