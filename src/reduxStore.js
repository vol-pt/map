import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducer';
import sagas from './rootSagas';

export const history = createBrowserHistory();

export default () => {
    let middlewareChain = [];
    /*************** REDUX LOGGER ****************/
    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger();
        middlewareChain.push(logger);
    }

    /*************** REDUX SAGA ****************/
    const sagaMiddleware = createSagaMiddleware();
    middlewareChain.push(sagaMiddleware);

    /*************** REDUX REACT ROUTER BINDING ****************/
    const rootReducers = reducers(history);
    middlewareChain.push(routerMiddleware(history));

    const store = createStore(rootReducers, applyMiddleware(...middlewareChain));
    sagaMiddleware.run(sagas);
    return store;
};
