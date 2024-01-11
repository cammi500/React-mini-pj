import React, { useRef } from "react";
import { TextInput, Navbar } from "flowbite-react";
import { api, api_key } from "../api/api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";
import { useNavigate } from "react-router";

const Header = () => {
  const movieName = useRef("");
  const dispatch = useDispatch();

  // const searchMovie =() =>{
  //   console.log(movieName.current.value);
  // }
  const searchMovie = async () => {
    if (movieName.current.value !== "") {
      const res = await api.get(
        `/search/movie?query=${movieName.current.value}&api_key=${api_key}`
      );
      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
      // console.log(res.data.results);
      dispatch(fetchMovies(res.data.results));
    }
  };

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            My Movie Channel
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2  ">
          {/* <Button>Get started</Button> */}
          <form className="flex items-center justify-center">
            <TextInput placeholder="Search.." ref={movieName} />
            <button
              type="button"
              onClick={() => searchMovie()}
              className="bg-gray-900 text-white p-2 rounded"
            >
              <i className="fa fa-search "></i>
            </button>
          </form>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/home" active>
            Home
          </Navbar.Link>

          <Navbar.Link href="#">Series</Navbar.Link>
          <Navbar.Link href="#">Movie</Navbar.Link>
          <Navbar.Link href="#">Tv Show</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
