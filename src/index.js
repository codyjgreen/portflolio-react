import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../public/css/default.css';
import '../public/css/layout.css';
// import '../public/css/media-queries.css';
// import '../public/css/magnific-popup.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
