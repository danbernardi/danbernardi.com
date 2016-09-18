import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, renderDevTools } from './utils/devtools';
import reducers from './reducers';
import { Router, browserHistory } from 'react-router';
import routeConfig from './routes';

const store = createStore(reducers);

const Index = () => {
  return (
    <div>
      <Provider store={ store }>
        <Router history={ browserHistory } routes={ routeConfig(store) } />
      </Provider>

      { renderDevTools(store) }
    </div>
  )
}

ReactDOM.render((
  <Index />
), document.getElementById('app'));
