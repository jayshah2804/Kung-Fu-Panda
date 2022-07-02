import React, { useEffect, useState } from "react";
import classes from "./MovieDetail.module.css";
import { useSelector } from "react-redux";

export const MovieDetail = () => {
  const movieId = useSelector((state) => state.selectedMovieId);
  const [data, setData] = useState();

  useEffect(() => {
    async function request() {
      const response = await fetch("https://SlightBrilliantDribbleware.jayshah280420.repl.co");
      const data = await response.json();
      setData(data[movieId - 1]);
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
              <div className="row">
                <div className="col d-inline-block col-lg-3 line-15">
                  <b>Director: </b>
                </div>
                <div className="col d-inline-block col-lg-9 pad-left-15 line-15">
                  {data.director}
                </div>
              </div>
              <div className="mt-1"></div>
              <div className="row">
                <div className="col d-inline-block col-lg-2 line-15">
                  <b>Casts: </b>
                </div>
                <div className="col d-inline-block col-lg-10 pad-left-15 line-15">
                  {data.casts}
                </div>
              </div>
              <div className="mt-1"></div>
              <div className="row">
                <div className="col d-inline-block col-lg-2 line-15">
                  <b>Genre: </b>
                </div>
                <div className="col d-inline-block col-lg-10 pad-left-20 line-15">
                  {data.genre}
                </div>
              </div>
            </div>
          </footer>
        </React.Fragment>
      )}
    </div>
  );
};
