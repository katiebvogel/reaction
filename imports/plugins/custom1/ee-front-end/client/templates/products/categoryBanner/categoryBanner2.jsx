// this file is not in use. Just a backup

import React, { Component, PropTypes } from "react";
// import { MediaItem } from "/imports/plugins/core/ui/client/components";
import "../products.html";
import { Products, Tags } from "/lib/collections";
// import { ProductTags } from "/imports/plugins/included/product-detail-simple/client/components/tags.js";

// import { BrowserPolicy } from "meteor/browser-policy-common";
// BrowserPolicy.content.allowImageOrigin("*");

// function to determine what category banner displays goes here and returns the banner src

// render() {
//   const slug = Reaction.Router.getParam("slug");
//   // const tag = Tags.findOne({ slug: slug }) || Tags.findOne(slug);
//   // fs .exists() ?
//   if (slug === "TOPS" || slug === "JEANS" || slug === "ACCESSORIES" || slug === "DRESSES-&-SKIRTS" || slug === "PANTS") {
//     imageSrc = "/custom/ReactionPublicCustomFolder/" + slug + ".png";
//     try {
//       fs.exists(imageSrc);
//       Logger.info("fs.accessSync is true");
//     } catch (e) {
//       Logger.info("error with fs access Sync", e);
//     }
//   } else {
//     imageSrc = "/custom/ReactionPublicCustomFolder/sunny.png";
//   }

class CategoryBanner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const slug = Reaction.Router.getParam("slug");
    const tag = Tags.findOne({ slug: slug }) || Tags.findOne(slug);
    if (tag === "TOPS") {
      imageSrc = "/custom/ReactionPublicCustomFolder/Tops.png";
    }
    if (document.URL === "http://localhost:3000/reaction/tag/TOPS") {
      imageSrc = "/custom/ReactionPublicCustomFolder/Tops.png";
    } else {
      imageSrc = "/custom/ReactionPublicCustomFolder/evereve_logo.gif";
    }
    const imgStyle = {
      height: 500,
      width: 800
    };
    return (
       <div>
         <div className="container-fluid-sm">
           <img src= {imageSrc} style={imgStyle}/>
         </div>
       </div>
    );
  }
}

CategoryBanner.propTypes = {
  getImage: PropTypes.func,
  imageSrc: PropTypes.string,
  slug: PropTypes.string,
  tag: PropTypes.object
};

export default CategoryBanner;
