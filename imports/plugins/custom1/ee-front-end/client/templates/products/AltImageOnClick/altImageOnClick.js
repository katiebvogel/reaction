// not working skeleton for on-click-show-alt-image
import React, { Component, PropTypes } from "react";
import { Media } from "/lib/collections";

import "../productGrid/content.html";
import "../productGrid/productGrid.html";
import "../productGrid/item.html";
import "../products.html";
// import ImageList from "./altImages.js";

class PopUpAltImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAltImage: false
    };
    this._onHexClick = this._onHexClick.bind(this);
  }
  _onHexClick(event) {
    event.preventDefault();
    this.setState({
      showAltImage: !this.state.showAltImage
    });
  }
  // additionalMedia() {
  //   const mediaArray = Media.find({
  //     "metadata.productId": this._id,
  //     "metadata.priority": {
  //       $gt: 0
  //     },
  //     "metadata.toGrid": 1
  //   }, { limit: 3 });
  //   if (mediaArray.count() > 1) {
  //     return mediaArray;
  //   }
  //   return false;
  // }
  render() {
    const mediaArray = Media.find({
      "metadata.productId": this._id,
      "metadata.priority": {
        $gt: 0
      },
      "metadata.toGrid": 1
    }, { limit: 3 });

    if (mediaArray.count() > 1) {
      const each = mediaArray[0];
      const stringUrl = "url" + "(" + each + ")";
      const myStyle = {
        backgroundImage: stringUrl
      };
      return (
        <div className="alt-image-on-click">
          <span className="product-image" style={myStyle} />
        </div>
      );
    }
    const hello = "Evereve";
    return (
      <div className="altImageContainer">
        <h2>{hello}</h2>
        <div className="alt-image-on-click">
          <button className="alt-image-button" onClick={this.props._onHexClick} >hexCode</button>
          {this.state.showAltImage ?
          <div className="alt-image-view" img src={each}>image</div> :
        null }
        </div>
      </div>
    );
  }
}
PopUpAltImage.propTypes = {
  // children: PropTypes.string
  hello: PropTypes.string,
  _onHexClick: PropTypes.func,
  each: PropTypes.string,
  showAltImage: PropTypes.bool
  // media: PropTypes.arrayOf(PropTypes.object)
};

export default PopUpAltImage;
