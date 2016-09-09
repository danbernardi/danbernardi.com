import { Iterable } from 'immutable';
import { createStore, applyMiddleware } from 'rx-redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = [apiMiddleware, thunk];


if (window.location.hostname === 'localhost') {
  const createLogger = require('redux-logger');

  const stateTransformer = state => {
    window.state = (Iterable.isIterable(state)) ? state.toJS() : state;
    return window.state;
  };

  const logger = createLogger({ stateTransformer });
  middleware.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default initialState => createStoreWithMiddleware(reducers, initialState);