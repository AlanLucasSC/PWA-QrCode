import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Router from './route/route';

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.register();
