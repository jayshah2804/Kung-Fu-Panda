import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./MovieList.module.css";

export const MovieList = () => {
  const movieId = useSelector((state) => state.selectedMovieId);
  const dispatch = useDispatch();

  const movieSelectHandler = (event) => {
    if (event.target.id) {
      dispatch({
        type: "movieList",
        movieId: event.target.id,
      });
    }
  };

  return (
    <ul className={classes.movieList} onClick={movieSelectHandler}>
      <li id="m1" className={"m1" === movieId ? "selectedLi" : ""}>Kung Fu Panda </li>
      <li id="m2" className={"m2" === movieId ? "selectedLi" : ""}>Kung Fu Panda 2</li>
      <li id="m3" className={"m3" === movieId ? "selectedLi" : ""}>Kung Fu Panda 3</li>
      <li id="m4" className={"m4" === movieId ? "selectedLi" : ""}>Harry Potter And The Deathly Hallows II</li>
      <li id="m5" className={"m5" === movieId ? "selectedLi" : ""}>Harry Potter and the Philosopher's Stone</li>
      <li id="m6" className={"m6" === movieId ? "selectedLi" : ""}>Harry Potter and the Chamber of Secrets</li>
      <li id="m7" className={"m7" === movieId ? "selectedLi" : ""}>Harry Potter and the Prisoner of Azkaban</li>
      <li id="m8" className={"m8" === movieId ? "selectedLi" : ""}>Harry Potter and the Goblet of Fire</li>
    </ul>
  );
};
