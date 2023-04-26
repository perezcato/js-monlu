import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarDefaultProps } from "react-circular-progressbar/dist/types";

type CircularBarProps = {
  percentage: number;
};
const CircularBar = (props: CircularBarProps) => {
  const percentage = props.percentage;

  return (
    <>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </>
  );
};

export default CircularBar;
