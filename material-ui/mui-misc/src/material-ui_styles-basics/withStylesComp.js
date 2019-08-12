import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "red",
    color: "blue",
    fontWeight: "bold",
    fontSize: "36px"
  },
  msg: {
    backgroundColor: "yellow",
    color: "red"
  }
};

class MyComponent extends React.Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        Hi from MyComponent
        <div>
          Messages
          <div className={this.props.classes.msg}>Message 1</div>
          <div className={this.props.classes.msg}>Message 2</div>
        </div>
        Bye!
      </div>
    );
  }
}

const MyCompWithStyles = withStyles(styles)(MyComponent);
export default MyCompWithStyles;
