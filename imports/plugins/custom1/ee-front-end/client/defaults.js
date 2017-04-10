import { Session } from "meteor/session";
import { Logger } from "/client/api";
import { evereveHome } from "./templates/layouts/evereveHome.html";
import { evereveLayout2 } from "./templates/layouts/layout.html";
import { evereveLayoutHeader } from "./templates/layouts/header.html";

Session.set("DEFAULT_WORKFLOW", "coreWorkflow");
Session.set("DEFAULT_LAYOUT", "evereveLayout2");
Session.set("INDEX_OPTIONS", {
  template: "evereveHome",
  layoutHeader: "evereveLayoutHeader",
  layoutFooter: "evereveLayoutFooter",
  theme: "evereve-practice-theme"
});
Logger.info("setting DEFAULT_LAYOUT");
