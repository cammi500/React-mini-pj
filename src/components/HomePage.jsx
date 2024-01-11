import React, { useEffect } from "react";
import Movie from "./Movie";
import { api, api_key } from "../api/api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";

function HomePage() {
  //for redux action
  const dispatch = useDispatch();

  //data yu
  const getMovies = async () => {
    const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
    // console.log(res.data.results);
    dispatch(fetchMovies(res.data.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <Movie />
    </div>
  );
}

export default HomePage;
