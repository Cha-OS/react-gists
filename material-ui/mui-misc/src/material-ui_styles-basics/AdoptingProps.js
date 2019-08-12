import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  // style rule
  foo: props => ({
    backgroundColor: props.backgroundColor
  }),
  bar: {
    // CSS property
    color: props => props.color
  }
});

export default function AdoptingProps() {
  // Simulated props for the purpose of the example
  const props = { backgroundColor: "black", color: "red" };
  // Pass the props as the first argument of useStyles()
  const classes = useStyles(props);

  return <div className={`${classes.foo} ${classes.bar}`}>AdoptingProps</div>;
}
