import React, { Component, PropTypes } from "react";
import TypeList from "../filter/type";
import BrandList from "../filter/brands";
import PriceList from "../filter/price";
import ColorList from "../filter/color";
import SizeList from "../filter/size";
import "../products.html";


class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showType: false,
      showBrand: false,
      showPrice: false,
      showColor: false,
      showSize: false,
      typeList: ["the ankle", "boyfriend", "bootcut & flare", "skinny", "straight leg", "shorts", "distressed", "raw hem", "high rise"]
    };
    this._onTypeClick = this._onTypeClick.bind(this);
    this._onBrandClick = this._onBrandClick.bind(this);
    this._onPriceClick = this._onPriceClick.bind(this);
    this._onColorClick = this._onColorClick.bind(this);
    this._onSizeClick = this._onSizeClick.bind(this);
  }
  _onTypeClick(event) {
    event.preventDefault();
    this.setState({
      showType: !this.state.showType
    });
  }
  _onBrandClick() {
    this.setState({
      showBrand: !this.state.showBrand
    });
  }
  _onPriceClick() {
    this.setState({
      showPrice: !this.state.showPrice
    });
  }
  _onColorClick() {
    this.setState({
      showColor: !this.state.showColor
    });
  }
  _onSizeClick() {
    this.setState({
      showSize: !this.state.showSize
    });
  }
  render() {
    return (
       <div>
         <div className="filterContainer">
           <div className="typeContainer">
           <button className="filterButton" onClick={this._onTypeClick}>Type <img src="/custom/ReactionPublicCustomFolder/arrow.png"/></button>
           {
          this.state.showType
            ? <TypeList />
            : null
        }
          </div>
          <div className="brandContainer">
           <button className="filterButton" onClick={this._onBrandClick}>Brand <img src="/custom/ReactionPublicCustomFolder/arrow.png"/></button>
           {this.state.showBrand ?
          <BrandList /> :
          null
       }
     </div>
     <div className="priceContainer">
           <button className="filterButton" onClick={this._onPriceClick}>Price <img src="/custom/ReactionPublicCustomFolder/arrow.png"/></button>
           {this.state.showPrice ?
          <PriceList /> :
          null
       }
     </div>
     <div className="colorContainer">
           <button className="filterButton" onClick={this._onColorClick}>Color <img src="/custom/ReactionPublicCustomFolder/arrow.png"/></button>
           {this.state.showColor ?
          <ColorList /> :
          null
       }
     </div>
     <div className="sizeContainer">
           <button className="filterButton" onClick={this._onSizeClick}>Size <img src="/custom/ReactionPublicCustomFolder/arrow.png"/></button>
           {this.state.showSize ?
          <SizeList /> :
          null
       }
     </div>
         </div>
       </div>
    );
  }
}

Filter.propTypes = {
  _onBrandClick: PropTypes.func,
  _onColorClick: PropTypes.func,
  _onPriceClick: PropTypes.func,
  _onSizeClick: PropTypes.func,
  _onTypeClick: PropTypes.func,
  children: PropTypes.element
};

export default Filter;
