import React, { useState } from "react";
// import cat from "./Assets/cat.svg";
// import cow from "./Assets/cow.svg";
// import birds from "./Assets/bird.svg";
// import dog from "./Assets/dog.svg";
// import horse from "./Assets/horse.svg";

import I1 from "./Assets/i1.webp";
import I2 from "./Assets/i2.jpeg";
import I3 from "./Assets/i3.jpeg";
import I4 from "./Assets/i4.jpeg";
import I5 from "./Assets/i5.webp";
import I6 from "./Assets/i6.webp";
import I7 from "./Assets/i7.webp";
import heart from "./Assets/heart.svg";

import "./ShowFlowers.css";

const SvgMap = {
  I1,
  I2,
  I3,
  I4,
  I5,
  I6,
  I7,
};

function ShowFlowers({ type }) {
  const [clicked, setClicked] = useState(0);

  const clickedHandler = () => {
    setClicked(clicked + 1);
  };

  return (
    <div className="flower-show" onClick={clickedHandler}>
      <img className="flower" src={SvgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicked + "px" }}
      />
      <p>Like</p>
    </div>
  );
}

export default ShowFlowers;
