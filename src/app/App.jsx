import styles from '../sass/index.scss';
import React from 'react';
import Menu from './Menu';

const App = (props) => {
  const { children } = props;

  return (
    <div className="cf">
      <Menu />
      <div className="content">
        { children }
      </div>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
