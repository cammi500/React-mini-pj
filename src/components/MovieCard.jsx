import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  // console.log(movie);
  return (
    <div>
      <Link to={`/movies/details/${movie.id}`}>
        <div className="max-w-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{movie.title}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview.slice(0, 150)}
            </p>
            <div className="">
              <span className="bg-black text-white p-3 rounded-xl">
                <i className="fa-solid fa-star me-2"></i> {movie.vote_average}
              </span>
              <span className="ms-3 bg-gray-500 text-white p-3 rounded-xl">
                <i className="fa-solid fa-calendar-days me-2"></i>
                {movie.release_date}
              </span>
            </div>
          </Card>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
