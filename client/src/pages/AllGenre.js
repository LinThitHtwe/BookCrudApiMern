import React from "react";
import GenreList from "../components/GenreList";

const AllGenre = () => {
  const showAllGenreLink = "http://localhost:8000/genre";

  return (
    <div>
      This is all Genre page
      <GenreList fetchUrl={showAllGenreLink} />
    </div>
  );
};

export default AllGenre;
