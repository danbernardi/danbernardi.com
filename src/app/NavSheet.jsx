import React from 'react';
import { Link } from 'react-router';

const NavSheet = props => {
  const { id, items } = props;

  const generateNavItem = (item, itemIndex) => {
    return (
      <li key={ itemIndex }>
        { item.routeTo ?
          <Link
            className="nav__item"
            to={ item.routeTo }
          >{ item.label }</Link>
        :
          <span
            className="nav__item"
            onClick={ () => console.log(item.target) }
          >{ item.label }</span>
        }
      </li>
    );
  };

  return (
    <div className="nav__sheet">
      { items ?
        <ul className="nav__items">
          { items.map((item, itemIndex) => (
            generateNavItem(item, itemIndex)
          )) }
        </ul>
      : null }
    </div>
  );
};

NavSheet.propTypes = {
  id: React.PropTypes.string,
  items: React.PropTypes.array
};

export default NavSheet;
