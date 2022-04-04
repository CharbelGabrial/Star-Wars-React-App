import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div>
    {/* Header */}
    <Header active="home" />
    
      <div className="home_content">
          <h1>
            Each film opens with the static blue text, "A long time ago in a
            galaxy far, far away....", followed by the Star Wars logo shrinking in
            front of a field of stars, as if moving away from the viewer.
            Initially, the logo's extremities are beyond the edge of the frame.
          </h1>
        </div>
    </div>
  );
};

export default Home;
