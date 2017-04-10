import React, { Component } from "react";
import "../products.html";

class TypeList extends Component {
  render() {
    return (
      <div className="dropdownContainer">
      <label><input type="checkbox" className="dropdownItem" /> the ankle </label>
      <label><input type="checkbox" className="dropdownItem" /> boyfriend </label>
      <label><input type="checkbox" className="dropdownItem" /> bootcut & flair </label>
      <label><input type="checkbox" className="dropdownItem" /> skinny </label>
      <label><input type="checkbox" className="dropdownItem" /> straight leg </label>
      <label><input type="checkbox" className="dropdownItem" /> shorts </label>
      <label><input type="checkbox" className="dropdownItem" /> distressed </label>
      <label><input type="checkbox" className="dropdownItem" /> raw hem </label>
      <label><input type="checkbox" className="dropdownItem" /> high rise </label>
      </div>
    );
  }
}

// Filter.propTypes = {
//
// };

export default TypeList;
