// this file communicates with elasticsearch to grab
// simple producst and variant products from their respective indices
import { Logger, Reaction } from "/server/api";
import { Fixture } from "/server/api/core/import";
import { Meteor } from "meteor/meteor";
import { client } from "./config.js";

const handleData = Meteor.bindEnvironment((error, response) => {
  if (error) {
    Logger.error(error, "error getting all simple products from elasticsearch");
  } else {
    response.hits.hits.forEach(function (hit) {
      const product = hit._source;
      product._id = product.guid;
      const myPrice = product.price;
      const decimalPrice = Number(myPrice).toFixed(2);
      const myPriceRange = {};
      myPriceRange.range = (decimalPrice).toString() + " - " + (decimalPrice).toString();
      myPriceRange.min = decimalPrice;
      myPriceRange.max = decimalPrice;
      delete product.price;
      product.price = myPriceRange;
      const today = new Date;
      const myDate = {};
      myDate.$date = today;
      product.createdAt = myDate;
      product.template = "eeProductDetailSimple";
      delete product.isSoldOut;
      delete product.requiresShipping;
      delete product.guid;
      delete product.updatedAt;
      delete product.workflow;
      // delete product.shopId;
      searchData.push(product);
    });
    if (response.hits.total > searchData.length) {
      client.scroll({
        scrollId: response._scroll_id,
        scroll: "5s"
      }, handleData);
    } else {
      Logger.info("every product!", searchData[3]);
      const newData = JSON.stringify(searchData);
      try {
        Fixture.process(newData, ["_id"], Reaction.Import.load);
        Logger.info("products are loaded to mongoDB");
        Reaction.Import.flush();
      } catch (err) {
        Logger.error(err, "Bypassing loading EVEREVE Products default data.");
      }
    }
  }
});

function elastic() {
  searchData = [];
  client.search({
    index: "reaction_products0322",

    scroll: "5s",
    type: "simple"
  }, handleData);
}


const variantData = Meteor.bindEnvironment((error, response) => {
  if (error) {
    Logger.error(error, "error getting ALL variant products from elasticSearch");
  } else {
    response.hits.hits.forEach(function (hit) {
      const product = hit._source;
      product._id = product.guid;
      product.weight = 2;
      product.template = "eeProductDetailSimple";
      delete product.handle;
      delete product.description;
      delete product.hashtags;
      delete product.guid;
      delete product.updatedAt;
      delete product.isSoldOut;
      delete product.workflow;
      delete product.vendor;
      delete product.requiresShipping;

      getData.push(product);
    });
    if (response.hits.total > getData.length) {
      client.scroll({
        scrollId: response._scroll_id,
        scroll: "5s"
      }, variantData);
    } else {
      Logger.info("every VARIANT product!", getData[3]);
      const newData = JSON.stringify(getData);
      try {
        Fixture.process(newData, ["_id"], Reaction.Import.load);
        Logger.info("VARIANTS are loaded to mongoDB");
        Reaction.Import.flush();
      } catch (err) {
        Logger.error(error, "Bypassing loading VARIANT default data.");
      }
    }
  }
});

function variants() {
  getData = [];
  client.search({
    index: "reaction_variants0320",
    scroll: "5s",
    type: "variant"
  }, variantData);
}

export default function () {
  if (process.env.ELASTICSEARCH_HOST && process.env.ELASTICSEARCH_AUTH) {
    elastic();
    variants();
  }
}
