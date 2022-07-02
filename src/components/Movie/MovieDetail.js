import React, { useEffect, useState } from "react";
import classes from "./MovieDetail.module.css";
import { useSelector } from "react-redux";

export const MovieDetail = () => {
  const movieId = useSelector((state) => state.selectedMovieId);
  const [data, setData] = useState();
  if (data) {
    console.log("not", data);
  }
  useEffect(() => {
    async function request() {
      const response = await fetch(
        "https://react-hhtp28-default-rtdb.firebaseio.com/movies/" +
          `${movieId}` +
          ".json"
      );
      const data = await response.json();
      setData(data);
    }
    request();
  }, [movieId]);

  return (
    <div className={classes.movieDetail}>
      {data && (
        <React.Fragment>
          <img
            src={data.image}
            alt="no mmovie"
            style={{ height: "65%", width: "95%", borderRadius: "15px" }}
          />
          <footer>
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {data.name}
            </h3>
            <div className={classes.description}>
              <p>
                <span>Director: </span>
                {data.director}
              </p>
              <p>
                <span>Casts: </span>
                {data.casts}
              </p>
              <p>
                <span>Genre: </span>
                {data.genre}
              </p>
            </div>
          </footer>
        </React.Fragment>
      )}
    </div>
  );
};
