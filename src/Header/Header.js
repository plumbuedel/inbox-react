import React from 'react';

const Header = ({ headline }) => {
    return <div className='jumbotron'>
      <h1 className="display-4">{headline}</h1>
      <hr className="my-4"></hr>
      <p>@christianjunge</p>
    </div>
  }

export default Header;