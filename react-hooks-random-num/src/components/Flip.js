import React from "react";
import FlipNumbers from "react-flip-numbers";

export default (props) => {
  return (
    <FlipNumbers
      height={50}
      width={50}
      color="red"
      play
      perspective={500}
      duration={2}
      numbers={props.sumChild.toString()}
    />
  );
};
