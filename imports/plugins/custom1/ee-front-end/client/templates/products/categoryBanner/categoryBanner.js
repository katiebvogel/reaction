import React, { Component, PropTypes } from "react";
import "../products.html";
import { Reaction } from "/client/api";

// import { Products, Tags } from "/lib/collections";

// function to determine what category banner displays goes here and returns the banner src
class CategoryBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const slug = Reaction.Router.getParam("slug");
    console.log("here is your slug", slug);
    const lowerSlug = slug.toLowerCase();
    const imageSrcSlug = "/custom/ReactionPublicCustomFolder/" + slug + ".png";
    const betterTitle = lowerSlug.split("-").join(" ");
    // const imageSrcDefault = "/custom/ReactionPublicCustomFolder/sunny.png";
    // const tag = Tags.findOne({ slug: slug }) || Tags.findOne(slug);
    if (slug === "TOPS" || slug === "JEANS" || slug === "ACCESSORIES" || slug === "DRESSES-&-SKIRTS" || slug === "PANTS") {
      imageSrc = imageSrcSlug;
      return (
         <div>
           <div className="container-fluid-sm">
             <img src= {imageSrc} />
           </div>
           <h1 className="category-title">{betterTitle}</h1>
         </div>
      );
    }
    return (
         <div>
           <h1 className="category-title">{betterTitle}</h1>
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
