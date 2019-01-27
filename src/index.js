import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';

import 'semantic-ui-css/semantic.min.css';
import './styles/index.css';
import './utils/polyfills';
import App from './pages';
import getStore from './reduxStore';
import * as serviceWorker from './utils/serviceWorker';
import { history } from './reduxStore';

ReactDOM.render(
    <Provider store={getStore()}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
