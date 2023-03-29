import React from 'react';
import ReactDOM from 'react-dom/client';

import AnimatedRoutes from './components/Animated_routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="main-flex">
      <AnimatedRoutes />
    </div>
  </React.StrictMode>
);

