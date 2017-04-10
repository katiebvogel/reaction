import React, { Component } from "react";

class SortList extends Component {
  render() {
    return (
      <div className="sortListContainer">
        <button className="sortListItem"> Price ($$$-$) </button>
        <button className="sortListItem"> Price ($-$$$) </button>
        <button className="sortListItem"> Name (A-Z) </button>
        <button className="sortListItem"> Name (Z-A) </button>
      </div>
    );
  }
}

export default SortList;
