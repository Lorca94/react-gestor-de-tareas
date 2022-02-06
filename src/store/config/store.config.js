import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../reducers/rootReducer';
import { watcherSaga } from '../sagas/sagas';

export const createAppStore = () => {
    const middleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        compose(applyMiddleware(middleware), composeWithDevTools())
        );

    middleware.run(watcherSaga);
    return store;
};
