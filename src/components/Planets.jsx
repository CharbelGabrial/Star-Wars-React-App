import React, { useState, useEffect } from "react";
import Header from "./Header";
import Loader from "react-js-loader";

const Planets = () => {
  const [Planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((jsondata) => {
        setPlanets(jsondata.results);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="Planets">
      {/* header */}
      <Header active="Planets" />
      { loading ? loading : <div className="parent_loader"><Loader type="bubble-ping" title={"Loading..."} color={'#FFFFFF'} size={100} /></div>}
      <div className="planets_content">
        {Planets.map((EachPlanet) => (
          <div className="planet" key={EachPlanet.name}>
            <h1>Name: {EachPlanet.name}</h1>
            <p>Rotation Period: {EachPlanet.rotation_period}</p>
            <p>Orbital Period: {EachPlanet.orbital_period}</p>
            <p>Surface Water: {EachPlanet.surface_water}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Planets;
