import React from 'react';

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <i className='navbar-logo fas fa-leaf'></i>
      <span>Habit Tracker</span>
      <span className='navbar-count'>{props.totalCount}</span>
    </div>
  );
};

export default Navbar;
