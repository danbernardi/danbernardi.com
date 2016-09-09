import React from 'react';
import NavSheet from './NavSheet';

const Nav = props => {
  const { sheets } = props;

  return (
    <div className="nav">
      { sheets.map((sheet, sheetIndex) => (
        <NavSheet { ...sheet } key={ sheetIndex } />
      )) }
    </div>
  );
}

Nav.propTypes = {
  sheets: React.PropTypes.array
};

export default Nav;
