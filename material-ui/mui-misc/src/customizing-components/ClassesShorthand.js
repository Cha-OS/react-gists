import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 100px",
    boxShadow: "0 33px 25px 20px rgba(255, 105, 135, .7)"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export default function ClassesShorthand() {
  return <StyledButton>classes shorthand</StyledButton>;
}