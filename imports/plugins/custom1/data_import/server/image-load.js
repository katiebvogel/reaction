import { Products } from "/lib/collections";
import { Logger, Reaction } from "/server/api";
import { Media } from "/lib/collections";


function attachImage(fileObj, myURL) {
  return fileObj.attachData(myURL, function () {
    Media.insert(fileObj, function (err) {
      if (err) {
        Logger.error(err, `Unable to attach image from ${myURL}`);
      }
    });
    Meteor.call("revisions/publish", fileObj._id);
  });
}


function makeImages(importShopId, srcURL) {
  Logger.info("makeImages function has started");
  const findProducts = Products.find({ type: "simple" });
  const shopId = importShopId || Reaction.getShopId();
  const imageRootURL = srcURL || "https://static.evereve.com/prodimages/";
  const imageAltURL = srcURL || "https://www.evereve.com/prodimages/alt_images/";// +FILENAME
  findProducts.forEach(function (product) {
    const imageMetaFieldObject = product.metafields.filter(meta => meta.key === "picture_id");
    if (product.metafields && imageMetaFieldObject.length > 0) {
      const fileObj = new FS.File();
      const imageId = imageMetaFieldObject[0].value;
      const myURL = imageRootURL + imageId + "-DEFAULT-l.jpg";

      if (product.type === "simple") {
        fileObj.metadata = {
          productId: product._id,
          variantId: product._id,
          shopId: shopId,
          priority: 0,
          toGrid: 1,
          workflow: "published"
        };
        // attach main product image
        attachImage(fileObj, myURL);
        const altMetaFieldObject = product.metafields.filter(meta => meta.key === "alt_images");
        if (altMetaFieldObject[0].value.length > 0 && altMetaFieldObject[0].value !== "None") {
        // simple products have alt_images field in metafields.
        // alt_images.value is a single string, comma delimited
          const altString = altMetaFieldObject[0].value;
        // const noSpaces = altString.replace(/\s/g, '');
          const altImageArray = altString.split(",");
          for (let i = 0; i < altImageArray.length; i++) {
            const altObj = new FS.File();
            altObj.metadata = {
              productId: product._id,
              variantId: product._id,
              shopId: shopId,
              priority: i + 1,
              toGrid: 1,
              workflow: "published"
            };
            const altURL = imageAltURL + altImageArray[i];
            attachImage(altObj, altURL);
          }
        } else {
          Logger.info("No alt images in this product", product._id);
        } // end altimage check
      } else if (product.type === "variant") {
        const ancestorId = product.ancestors[0];
        fileObj.metadata = {
          productId: ancestorId,
          variantId: product._id,
          shopId: shopId,
          priority: 0,
          toGrid: 1,
          workflow: "published"
        };
        // attach variant image with same image as main product.
        attachImage(fileObj, myURL);
      } else {
        Logger.info("Looking for products for image load... not finding any type of product here");
      }
    }     // end metafield check.
  }); // end products forEach
}

export default function () {
  // will load current shop by default
  makeImages();
}
