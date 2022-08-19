import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      loading: true,
    };
  }


  render() {
    return (
      <div data-testid="header-component">
        <header>
          <nav>
           <Link data-testid="link-search" to="/search">Search</Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;