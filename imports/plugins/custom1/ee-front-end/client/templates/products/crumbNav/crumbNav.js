import React, { Component } from "react";
import { Reaction } from "/client/api";
import { Tags } from "/lib/collections";
import "../products.html";

class CrumbNav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this._onTypeClick = this._onTypeClick.bind(this);
  }
  _onTypeClick(event) {
    event.preventDefault();
    this.setState({
      showType: !this.state.showType
    });
  }
  render() {
    const slug = Reaction.Router.getParam("slug");
    const newSlug = slug.split("-").join(" ").toLowerCase();
    const query = { slug: slug };
    const pageTag = Tags.find(query);
    const resultTags = pageTag.fetch();
    const resultId = resultTags[0]._id;
    const parentID = []; // This array will hold all parent tags of the current page
    if (resultTags[0].relatedTagIds.length === 0) {
      // Look through all top level tags to see if it is a related tag ID
      const topLevelArray = [{ slug: "TOPS" }, { slug: "ACCESSORIES" }, { slug: "JEANS" }, { slug: "DRESSES-&-SKIRTS" }, { slug: "PANTS" }];
      const secondLevelArray = [{ slug: "Blazers-&-Jackets" }, { slug: "Jewelry" }, { slug: "Scarves" }, { slug: "Skinny" }, { slug: "Intimates" }];
      for (let h = 0; h < secondLevelArray.length; h++) {
        const secondLevelSearch = Tags.find(secondLevelArray[h]);
        const secondLevelFetch = secondLevelSearch.fetch();
        const secondLevelRelated = secondLevelFetch[0].relatedTagIds;
        for (let k = 0; k < secondLevelRelated.length; k++) {
          if (secondLevelRelated[k] === resultId) {
            parentID.push(secondLevelFetch[0]._id);
            for (let i = 0; i < topLevelArray.length; i++) {
              const topLevelSearch = Tags.find(topLevelArray[i]);
              const topLevelFetch = topLevelSearch.fetch();
              const topLevelRelated = topLevelFetch[0].relatedTagIds;
              for (let j = 0; j < topLevelRelated.length; j++) {
                if (topLevelRelated[j] === parentID[0]) {
                  parentID.push(topLevelFetch[0]._id);
                }
              }
            }
          }
        }
      }
      for (let i = 0; i < topLevelArray.length; i++) {
        const topLevelSearch = Tags.find(topLevelArray[i]);
        const topLevelFetch = topLevelSearch.fetch();
        const topLevelRelated = topLevelFetch[0].relatedTagIds;
        for (let j = 0; j < topLevelRelated.length; j++) {
          if (topLevelRelated[j] === resultId) {
            parentID.push(topLevelFetch[0]._id);
          }
        }
      }
    } else {
      const topLevelArray = [{ slug: "TOPS" }, { slug: "ACCESSORIES" }, { slug: "JEANS" }, { slug: "DRESSES-&-SKIRTS" }, { slug: "PANTS" }];
      for (let i = 0; i < topLevelArray.length; i++) {
        const topLevelSearch = Tags.find(topLevelArray[i]);
        const topLevelFetch = topLevelSearch.fetch();
        const topLevelRelated = topLevelFetch[0].relatedTagIds;
        for (let j = 0; j < topLevelRelated.length; j++) {
          if (topLevelRelated[j] === resultId) {
            parentID.push(topLevelFetch[0]._id);
          }
        }
      }
    }
// Here we will format the parent ids into text slugs, similar to how we formatted the newSlug variable above
    let unformattedParent = "";
    let unformattedParentTwo = "";
    let formattedParent = "";
    let formattedParentTwo = "";
    if (parentID.length === 1) {
      const parentQuery = { _id: parentID[0] };
      const parentQueryFinder = Tags.find(parentQuery);
      const parentQueryFetch = parentQueryFinder.fetch();
      unformattedParent = parentQueryFetch[0].slug;
      formattedParent = unformattedParent.split("-").join(" ").toLowerCase();
    } else {
      for (let m = 0; m < parentID.length; m++) {
        // DO SOME FORMATS YEAH!
        const parentQuery = { _id: parentID[m] };
        const parentQueryFinder = Tags.find(parentQuery);
        const parentQueryFetch = parentQueryFinder.fetch();
        if (m === 0) {
          unformattedParent = parentQueryFetch[0].slug;
          formattedParent = unformattedParent.split("-").join(" ").toLowerCase();
        } else {
          unformattedParentTwo = parentQueryFetch[0].slug;
          formattedParentTwo = unformattedParentTwo.split("-").join(" ").toLowerCase();
        }
      }
    }
    // Actual rendering
    if (parentID.length === 2) {
      return (
      <div className="crumbNavTextTwo">
      <a href={unformattedParentTwo}> {formattedParentTwo} > </a>
      <a href={unformattedParent}>  {formattedParent} > </a>
      <a href={slug}> {newSlug} </a>
      </div>
      );
    } else if (parentID.length === 1) {
      return (
        <div className="crumbNavTextOne">
        <a href={unformattedParent}> {formattedParent} > </a>
        <a href={slug}> {newSlug} </a>
        </div>
      );
    } else {
      return (
         <div className="crumbNavText">
           <a href={slug}> {newSlug} </a>
         </div>
      );
    }
  }
}

export default CrumbNav;
