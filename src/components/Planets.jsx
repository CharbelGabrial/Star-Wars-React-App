import React, { useState, useEffect } from "react";
import Header from "./Header";

const Planets = () => {
  const [Planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((jsondata) => {
        console.log(jsondata.results);
        setPlanets(jsondata.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="Planets">
      {/* header */}
      <Header active="Planets" />

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
