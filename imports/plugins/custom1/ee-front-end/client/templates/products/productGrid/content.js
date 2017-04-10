/**
* gridContent helpers
*/
import { Reaction } from "/client/api";
import { Template } from "meteor/templating";
import { Media } from "/lib/collections";
import PopUpAltImage from "/imports/plugins/custom/ee-front-end/client/templates/products/AltImageOnClick/altImageOnClick.js";
import "./content.html";
// Template.gridContent.events({
//   "click button.modal": function (event, template) {
//     const name = template.$(event.target).data("modal-template");
//     Session.set("activeModal", name);
//   }
// });


Template.gridContent.helpers({
  pdpPath() {
    const instance = Template.instance();
    const product = instance.data;

    if (product) {
      let handle = product.handle;

      if (product.__published) {
        handle = product.__published.handle;
      }

      return Reaction.Router.pathFor("product", {
        hash: {
          handle
        }
      });
    }

    return "/";
  },
  displayOurPrice: function () {
    if (this.price && this.price.max) {
      const priceDisplay = this.price.max;
      const stringPrice = priceDisplay.toString();
      return stringPrice;
    }
  },
  displayHex: function () {
    betterHex = [];
    if (this.metafields && this.metafields[5].value) {
      const hexes = this.metafields[5].value;
      const hexArray = hexes.split(",");
      if (hexArray.length > 1) {
        for (hex of hexArray) {
          const hexCode = "#" + hex;
          betterHex.push(hexCode);
        }
        return betterHex;
      }
    }
  },
  displayBrand: function () {
    if (this.vendor) {
      const vendor = this.vendor;
      const brand = vendor.toLowerCase();
      return brand;
    }
  },
  altImage() {
    return PopUpAltImage;
  },
  additionalMedia() {
    const mediaArray = Media.find({
      "metadata.productId": this._id,
      "metadata.priority": {
        $gt: 0
      },
      "metadata.toGrid": 1
    }, { limit: 3 });
    if (mediaArray.count() > 1) {
      // console.log("media array: ", mediaArray);
      return mediaArray;
    }
    return false;
  }
  // altImage: function () {
  //   const betterAltArray = [];
  //   const imageAltURL = "https://www.evereve.com/prodimages/alt_images/";// +FILENAME
  //   const altMetaFieldObject = this.metafields.filter(meta => meta.key === "alt_images");
  //   if (altMetaFieldObject[0].value.length > 0 && altMetaFieldObject[0].value !== "None") {
  //     const altString = altMetaFieldObject[0].value;
  //     const altImageArray = altString.split(",");
  //     for (let i = 0; i < altImageArray.length; i++) {
  //       const altURL = imageAltURL + altImageArray[0];
  //       betterAltArray.push(altURL);
  //     }
  //     return betterAltArray[1];
  //   }
  // }
});


Template.evereveContent.replaces("gridContent");
Template.evereveContent.inheritsHelpersFrom("gridContent");
Template.evereveContent.inheritsEventsFrom("gridContent");
