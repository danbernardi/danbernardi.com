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
    let active = false;

    if (location.pathname === item.routeTo ||
        location.pathname === '/home' && item.routeTo === '/') {
      active = true;
    }

    return (
      <li key={ itemIndex }>
        { item.routeTo ?
          <Link
            className={ `nav__item ${active ? 'is-active' : ''}` }
            target={ item.external ? '_blank' : '' }
            to={ item.routeTo }
          >
            { item.icon ? <span className={ `fa ${item.icon} pr1` }></span> : null }
            { item.label }
          </Link>
        :
          <span
            className="nav__item sheet__trigger"
            onClick={ () => switchActiveSheet(item.target) }
          >
            { item.icon ? <span className={ `fa ${item.icon} pr1` }></span> : null }
            { item.label }
          </span>
        }
      </li>
    )
  };
  
  const initialStyles = { transition: 'transform 0.2s ease-in-out' };

  let transformStyles = {};

  if (activeSheetID.current === id) {
    // if sheet is currently active
    transformStyles = { transform: 'translateX(0)' };
  } else if (activeSheetID.previous.indexOf(id) !== -1) {
    // if sheet has been active in the past
    transformStyles = { transform: 'translateX(-100%)' };
  } else {
    // if sheet isn't and hasn't yet been active
    transformStyles = { transform: 'translateX(100%)' };
  }

  return (
    <div className="nav__sheet" style={ Object.assign(initialStyles, transformStyles) }>
      
      { id === 'index' ?
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
