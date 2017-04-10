import { Reaction } from "/server/api";
import eeBlocks from "../lib/layout/simple";
import EETwoColumn from "../lib/layout/twoColumn";
import "./i18n";

Reaction.registerTemplate({
  name: "eeProductDetailSimple",
  title: "Evereve Product Detail Simple Layout",
  type: "react",
  templateFor: ["pdp"],
  permissions: ["admin", "owner"],
  audience: ["anonymous", "guest"],
  template: eeBlocks()
});

Reaction.registerTemplate({
  name: "eeProductDetailTwoColumn",
  title: "Evereve Product Detail Two Column Layout",
  type: "react",
  templateFor: ["pdp"],
  permissions: ["admin", "owner"],
  audience: ["anonymous", "guest"],
  template: EETwoColumn()
});
