import React, { Component } from "react";

class PriceList extends Component {
  render() {
    return (
      <div className="dropdownContainer">
        <label><input type="checkbox" className="dropdownItem" /> $0-$49.99 </label>
        <label><input type="checkbox" className="dropdownItem" /> $50-$74.99 </label>
        <label><input type="checkbox" className="dropdownItem" /> $75-$99.99 </label>
        <label><input type="checkbox" className="dropdownItem" /> $100-$149.99 </label>
      </div>
    );
  }
}

// Filter.propTypes = {
//
// };

export default PriceList;
