import React from "react";
import "./Hero.css";
import delimeter from "../delimeter";

export default function Hero() {
  const axios = require("axios").default;

  // Make a request for a user with a given ID
  /*  axios
    .get("/user?ID=12345")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
 */
  return (
    <header
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/712422.jpg")`,
      }}
      className="hero bg-cover  bg-center text-white relative "
    >
      <div className=" hero_contents">
        <h1 className="hero_title">Movie Name</h1>
        <div>
          <button className="p-2 bg-opacity-75  rounded-sm transition-all ease-in duration-100   hover:bg-slate-300 cursor-pointer text-black bg-white mr-2 w-28">
            Play
          </button>
          <button className=" p-2 bg-opacity-70 rounded-sm transition-all ease-in  duration-100   cursor-pointer hover:bg-gray-700 text-black bg-gray-600 w-28 ">
            My List
          </button>
        </div>
        <h1 className="w-96 pt-5">
          {delimeter(
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam iste aliquid maiores cum quas unde est excepturi architecto iusto",
            120
          )}
        </h1>
      </div>
    </header>
  );
}