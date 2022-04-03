import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useStateValue } from "../context/StateManagement";
import closeicon from "../img/close.png";
import Loader from "react-js-loader";

const Films = () => {
  const [films, setfilms] = useState([]);
  const [{ planets }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then((jsondata) => {
        window.localStorage.setItem("count", jsondata.count);
        setfilms(jsondata.results);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const HandlePopUp = (e, url) => {
    e.preventDefault();
    document.querySelector(".popup").classList.add("active");

    fetch(url)
      .then((res) => res.json())
      .then((jsondata) => {
        HandlePeopleData(jsondata.characters);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const HandlePeopleData = (characters) => {
    dispatch({
      type: "empty",
      planets: [],
    });

    characters.forEach((InnerUrl) => {
      fetch(InnerUrl)
        .then((res) => res.json())
        .then((jsondata) => {
          dispatch({
            type: "planets",
            planets: {
              name: jsondata.name,
              gender: jsondata.gender,
              eye_color: jsondata.eye_color,
              hair_color: jsondata.hair_color,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div className="Films">
      {/* header */}
      <Header active="Films" />
      { loading ? loading : <div className="parent_loader"><Loader type="bubble-ping" title={"Loading..."} color={'#FFFFFF'} size={100} /></div>}
      <div className="films_content">
        {films.map((EachFilm) => (
          <div className="film" key={EachFilm.url}>
            <h1>{EachFilm.title}</h1>
            <p>{EachFilm.release_date}</p>
            <button onClick={(e) => HandlePopUp(e, EachFilm.url)}>
            Characters
            </button>
          </div>
        ))}
      </div>

      <div className="popup">
        <span
          className="close_icon"
          onClick={(e) => {
            document.querySelector(".popup").classList.remove("active");
          }}
        >
          <img src={closeicon} alt="" />
        </span>
        <div className="films_content">
          {planets.map((EachCharacter) => (
            <div className="film" key={EachCharacter.name}>
              <h1>{EachCharacter.name}</h1>
              <p>Gender: {EachCharacter.gender}</p>
              <p>Eye Color: {EachCharacter.eye_color}</p>
              <p>Hair Color: {EachCharacter.hair_color}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Films;
