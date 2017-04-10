import React, { Component, PropTypes } from "react";
// import { Reaction } from "/client/api";
import "../products.html";
import SortList from "../sortButton/sortList";

class SortButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSort: false
    };
    this._onSortClick = this._onSortClick.bind(this);
  }
  _onSortClick(event) {
    event.preventDefault();
    this.setState({
      showSort: !this.state.showSort
    });
  }
  render() {
    return (
       <div className="sortButtonContainer">
             <button className="sortButton" onClick={this._onSortClick}>
               Sort <img src="/custom/ReactionPublicCustomFolder/arrow.png" />
             </button>
             {
            this.state.showSort
              ? <SortList />
              : null
          }
       </div>
    );
  }
}

SortButton.propTypes = {
  _onSortClick: PropTypes.func
};

export default SortButton;
