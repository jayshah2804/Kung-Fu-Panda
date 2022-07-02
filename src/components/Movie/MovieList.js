import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./MovieList.module.css";

export const MovieList = () => {
  const movieId = useSelector((state) => state.selectedMovieId);
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const movieSelectHandler = (event) => {
    if (event.target.id) {
      dispatch({
        type: "movieList",
        movieId: event.target.id,
      });
    }
  };

  useEffect(() => {
    async function request() {
      const response = await fetch("https://SlightBrilliantDribbleware.jayshah280420.repl.co");
      const data = await response.json();
      setData(data);
    }
    request();
  }, []);

  return (
    <ul className={classes.movieList} onClick={movieSelectHandler}>
      {data && data.map((movie) => <li id={movie.key} key={movie.key} className={movie.key === movieId ? "selectedLi" : ""} >{movie.name}</li>)}
    </ul>
  );
};
