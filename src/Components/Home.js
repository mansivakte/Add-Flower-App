import { useState } from "react";
import React from "react";
import ShowFlowers from "./ShowFlowers";
import "./Home.css";

function getRandomFlowers() {
  const flowers = ["I1", "I2", "I3", "I4", "I5", "I6", "I7"];

  return flowers[Math.floor(Math.random() * flowers.length)];
}

// console.log("Ramdom animals", getRandomAnimals);

function Home() {
  const [flowers, setFlowers] = useState([]);

  const clickHandler = () => {
    setFlowers([...flowers, getRandomFlowers()]);
  };

  const renderedFlowers = flowers.map((flower, index) => {
    return <ShowFlowers key={index} type={flower} />;
  });
  return (
    <div className="app">
      <button onClick={clickHandler} className="button">
        Add Flower
      </button>
      <div className="flower-list">{renderedFlowers}</div>
    </div>
  );
}

export default Home;
