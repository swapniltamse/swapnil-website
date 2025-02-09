import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Welcome to My Website</h1>
      <nav>
        <a href="#bio">About Me</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
