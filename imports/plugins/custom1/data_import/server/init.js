import {
  Hooks,
  Logger } from "/server/api";
import {
  Fixture
} from "/server/api/core/import";
import elastic from "./product-load";
import tags from "./tag-load";
import makeImages from "./image-load";

Hooks.Events.add("onCoreInit", () => {
  Logger.info(" ************ starting the Evereve? ***************");
  elastic();
  // saveTagData();
  tags();
  Fixture.flush();
});

// // below code can be commented or un-commented depending on whether you actually want images to load. Currently it is commented OUT to improve speed of revising and testing other plugins
//
Hooks.Events.add("afterCoreInit", () => {
  Logger.info(" time now to load up the images");
  makeImages();
  Fixture.flush();
});
