import React from "react";
import "./FlavorForm.css";
import "../Form.css";
export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ["coconut"] }; //for a non-mutiple was: { value: "coconut" }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = Array.from(event.target.selectedOptions, item => item.value); //for a non-mutiple was: event.target.value
    console.log("value", value);
    this.setState({ value: value });
  }

  handleSubmit(event) {
    console.log("state", this.state);
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="bordered" onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select
            multiple={true}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
