import React from "react";

const NavBar = () => {
  const homeLink = "/";
  const addLink = "/add";
  const genreListLink = '/genre'

  return (
    <nav>
      <ul>
        <li>
          <a href={homeLink}>Home</a>
        </li>
        <li>
          <a href={addLink}>Add Book</a>
        </li>
        <li>
          <a href={genreListLink}>Genres</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
