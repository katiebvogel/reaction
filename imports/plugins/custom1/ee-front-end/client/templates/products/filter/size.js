import React, { Component } from "react";

class SizeList extends Component {
  render() {
    return (
      <div className="dropdownContainer">
        <label><input type="checkbox" className="dropdownItem" /> XS    </label>
        <label><input type="checkbox" className="dropdownItem" /> S    </label>
        <label><input type="checkbox" className="dropdownItem" /> M    </label>
        <label><input type="checkbox" className="dropdownItem" /> L    </label>
        <label><input type="checkbox" className="dropdownItem" /> XL    </label>
      </div>
    );
  }
}

// Filter.propTypes = {
//
// };

export default SizeList;
