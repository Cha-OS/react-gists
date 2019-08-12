// https://codesandbox.io/s/10vxmwqy7
// https://stackoverflow.com/questions/51178959/how-to-set-css-of-different-parts-of-a-material-ui-dialog
/* eslint-disable react/no-multi-comp */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
const emails = ["username@gmail.com", "user02@gmail.com"];
const styles = {
  root: {
    backgroundColor: "red"
  }
};

class CustomizedDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, invisible, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        {...other}
        BackdropProps={{
          classes: {
            root: classes.root
          }
        }}
        PaperProps={{
          style: {
            minHeight: "75vh",
            minWidth: "75vw"
          }
        }}
        aria-labelledby="open-dialog-title"
        aria-describedby="open-dialog-description"
      >
        <DialogTitle id="open-dialog-title">title</DialogTitle>
        <DialogContent>
          <DialogContentText id="open-dialog-description">
            content
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid container justify="center">
            <Grid item>
              <Button variant="raised" color="primary">
                test
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    );
  }
}

CustomizedDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
};

const CustomizedDialogWrapped = withStyles(styles)(CustomizedDialog);

class CustomizedDialogDemo extends React.Component {
  state = {
    open: false,
    selectedValue: emails[1]
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    return (
      <div>
        <Typography variant="subheading">
          Selected: {this.state.selectedValue}
        </Typography>
        <br />
        <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
        <CustomizedDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default CustomizedDialogDemo;
