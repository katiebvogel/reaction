import React, { Component } from "react";

class ColorList extends Component {
  render() {
    return (
      <div className="dropdownContainer">
        <label><input type="checkbox" className="dropdownItem" /> Pink </label>
        <label><input type="checkbox" className="dropdownItem" /> Red </label>
        <label><input type="checkbox" className="dropdownItem" /> Orange </label>
        <label><input type="checkbox" className="dropdownItem" /> Yellow </label>
        <label><input type="checkbox" className="dropdownItem" /> Green </label>
        <label><input type="checkbox" className="dropdownItem" /> Blue </label>
        <label><input type="checkbox" className="dropdownItem" /> Purple </label>
        <label><input type="checkbox" className="dropdownItem" /> Brown </label>
        <label><input type="checkbox" className="dropdownItem" /> Black </label>
        <label><input type="checkbox" className="dropdownItem" /> White </label>
      </div>
    );
  }
}

// Filter.propTypes = {
//
// };

export default ColorList;
