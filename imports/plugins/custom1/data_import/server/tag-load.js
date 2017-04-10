// this file communicates with elasticsearch to pull the tag data from its index//

import { Logger, Reaction } from "/server/api";
import { Fixture } from "/server/api/core/import";
import { Meteor } from "meteor/meteor";
import { client } from "./config.js";


// below code is only used if we wanted to write json files to either our plugin directory, or the reaction root directory.
// const fs = require("file-system");
// const path = require("path");
// const pluginRootDir = () => {
//   const fsPath = path.resolve(".");
//   return fsPath.substring(0, fsPath.indexOf(".meteor")) + "imports/plugins/custom/data_import/";
// };

// const reactionRootDir = () => {
//   const fsPath = path.resolve(".");
//   return fsPath.substring(0, fsPath.indexOf(".meteor"));
// };

const handleTagData = Meteor.bindEnvironment((error, response) => {
  if (error) {
    Logger.error(error, "error getting it ALL in the tags");
  } else {
    response.hits.hits.forEach(function (hit) {
      const tag = hit._source;
      tag.shopId = "J8Bhq3uTtdgwZx3rz";
      tag._id = tag.taxo_uuid;
      tag.name = tag.reaction_tag_name;
      tag.slug = tag.name.split(" ").join("-");
      delete tag.reaction_tag_name;
      delete tag.taxo_level;
      delete tag.taxo_grandparent_uuid;
      delete tag.taxo_parent_uuid;
      delete tag.typ;
      delete tag.subtyp_1;
      delete tag.dept;
      delete tag.web_taxo_id;
      delete tag.active;
      delete tag.taxo_uuid;
      tagSearchData.push(tag);
    });
    if (response.hits.total > tagSearchData.length) {
      client.scroll({
        scrollId: response._scroll_id,
        scroll: "10s"
      }, handleTagData);
    } else {
      Logger.info("every TAG!", tagSearchData[2]);
      const newTagData = JSON.stringify(tagSearchData);
      try {
        Fixture.process(newTagData, ["_id"], Reaction.Import.load);
        Logger.info("TAGS are loaded to mongoDB");
        Reaction.Import.flush();
        // originalTags(newTagData);
        // saveTagData(newTagData);
      } catch (err) {
        Logger.error(err, "Bypassing loading TAGS default data.");
      }
    }
  }
});


function tags() {
  tagSearchData = [];
  client.search({
    index: "reaction_taxo_updated",
    scroll: "10s",
    type: "tags"
  }, handleTagData);
}

// below function was originally used if we wanted to keep a copy of our tags.json file in our plugin directory.
// function originalTags(data) {
//   fs.writeFile(pluginRootDir() + "private/data/originalTags.json", data, function (err) {
//     if (err) {
//       Logger.error(err, "error making tag file");
//     } else {
//       Logger.info("you made a file, check it out");
//     }
//   });
// }


// below function is not in use.  It was used to send the data as a json file to the reaction root tags.json file.
// function saveTagData(data) {
//   fs.writeFile(reactionRootDir() + "private/data/Tags.json", data, function (err) {
//     if (err) {
//       Logger.error(err, "error with your data file export");
//     } else {
//       Logger.info("you sent a file to root directory location");
//     }
//   });
// }


export default function () {
  if (process.env.ELASTICSEARCH_HOST && process.env.ELASTICSEARCH_AUTH) {
    tags();
    // saveTagData();
  }
}
