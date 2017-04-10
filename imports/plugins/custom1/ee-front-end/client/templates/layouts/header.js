import React, { Component } from "react";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";

// Create a react component
class EvereveLayoutHeader extends Component {
  render() {
    return (
      <div className="allheader">
      <div className="topbar">
        <div className="evereve">
          <a href="http://www.evereve.com"><img className="tiny-evereve-logo" src="./custom/ReactionPublicCustomFolder/gold.png" />  Evereve</a>
        </div>
        <div className="trendsend">
          <a href="http://www.trendsend.com">Trendsend <em>by Evereve</em></a>
        </div>
        <div className="store">
          <a href="http://www.evereve.com/storelocator">Find a store near you > </a>
        </div>
      </div>
      <div className="logo">
        <img src="/custom/ReactionPublicCustomFolder/evereve_logo.gif" alt="Ever Eve Logo" align="left" />
      </div>
      <div className="container-fluid">
        <div role="nav-ee">

          <div className="row">
          {/* {  {{> CoreNavigationBar coreNavProps}} } */}
          </div>

          <div className="row">
            {/* {{!-- {{> tagNav tagNavProps}} --}} */}
          </div>
        </div>
      </div>
      {/* <div className="globalBanner">
        <img src="./custom/ReactionPublicCustomFolder/banner.png" />
      </div> */}
    </div>
    );
  }
}

// Register react component.
// Now MyComponent can be accessed anywhere on the client with the name "my-react-component"
registerComponent({
  name: "EvereveLayoutHeader",
  component: EvereveLayoutHeader
});
