import App from './app/App';
import Work from './app/Work';
import Home from './app/Home';

const routeConfig = (/*store*/) => {
  return [
    {
      path: '/',
      component: App,
      indexRoute: {
        onEnter: (nextState, replace) => replace('/home')
      },
      childRoutes: [
        { path: 'home', component: Home },
        { path: 'work', component: Work }
      ]
    }
  ]
};

export default routeConfig;
