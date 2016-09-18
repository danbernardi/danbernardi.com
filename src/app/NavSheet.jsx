import React from 'react';
import { Link } from 'react-router';
import * as actions from '../actions';
import { connect } from 'react-redux';

const NavSheet = props => {
  const { id, items, activeSheetID, dispatch } = props;

  const switchActiveSheet = (targetID) => {
    dispatch(actions.addPreviousSheetID(activeSheetID.current));
    dispatch(actions.setActiveSheetID(targetID));
  }

  const revertActiveSheet = () => {
    dispatch(actions.revertToPreviousSheetID());
  }

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
            onClick={ () => switchActiveSheet(item.target) }
          >{ item.label }</span>
        }
      </li>
    );
  };

  let styles = {};

  if (activeSheetID.current === id) {
    styles = { zIndex: 5, transform: 'translateX(0)' };
  } else if (activeSheetID.previous.indexOf(id) !== -1) {
    styles = { zIndex: 5, transform: 'translateX(-100%)' };
  } else {
    styles = { zIndex: 1, transform: 'translateX(100%)' };
  }
    

  return (
    <div className="nav__sheet" style={ styles }>
      
      { id === 'home' ?
        <div className="menu__top menu__logo">
          <Link to="/">
            <img src={ require('../assets/img/logo.svg') } alt="Logo badge" />
            <h5 className="menu__title typ--medium">danbernardi</h5>
          </Link>
        </div>
      : 
        <div className="menu__top menu__back" onClick={ () => revertActiveSheet() }>
          <h5 className="menu__title">Back</h5>
        </div>
      }

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
  items: React.PropTypes.array,
  dispatch: React.PropTypes.func,
  activeSheetID: React.PropTypes.object
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID
});

export default connect(injectStateProps)(NavSheet);
