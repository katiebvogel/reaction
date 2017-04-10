import React, { Component } from "react";

class BrandList extends Component {
  render() {
    return (
      <div className="dropdownContainer">
      <label><input type="checkbox" className="dropdownItem" /> AG </label>
      <label><input type="checkbox" className="dropdownItem" /> Allison Joy </label>
      <label><input type="checkbox" className="dropdownItem" /> alternative </label>
      <label><input type="checkbox" className="dropdownItem" /> amelia </label>
      <label><input type="checkbox" className="dropdownItem" /> amuse society </label>
      </div>
    );
  }
}

// Filter.propTypes = {
//
// };

export default BrandList;
