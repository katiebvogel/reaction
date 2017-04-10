// layouts
import "./layouts/layout.html";
import "./layouts/layout.js";

import "./layouts/footer.html";
import "./layouts/header.html";
import "./layouts/header.js";
import "./products/categoryBanner/categoryBanner.js";
import "./products/AltImageOnClick/altImageOnClick.js";
// products
// import "./layouts/evereveProducts.html";
// import "./layouts/evereveProducts.js";

// static
import "./static/aboutus.html";
import "./layouts/evereveHome.html";

import "./products/products.html";
import "./products/products.js";

import "./products/productGrid/content.html";
import "./products/productGrid/content.js";
import "./products/productGrid/controls.html";
import "./products/productGrid/controls.js";
import "./products/productGrid/item.html";
import "./products/productGrid/item.js";
import "./products/productGrid/notice.html";
import "./products/productGrid/notice.js";
import "./products/productGrid/productGrid.html";
import "./products/productGrid/productGrid.js";
// import "./products/productGrid/publishControls.html";
// import "./products/productGrid/publishControls.js";

import "./products/productList/productList.html";
import "./products/productList/productList.js";

import "./products/productSettings/productSettings.html";
import "./products/productSettings/productSettings.js";

import { registerComponent } from "/imports/plugins/core/layout/lib/components";

import { CategoryBanner } from "./products/categoryBanner/categoryBanner";
import { Filter } from "./products/filter/filter";
import { BrandList } from "./products/filter/brands";
import { ColorList } from "./products/filter/color";
import { PriceList } from "./products/filter/price";
import { SizeList } from "./products/filter/size";
import { TypeList } from "./products/filter/type";
import { CrumbNav } from "./products/crumbNav/crumbNav";
import { SortButton } from "./products/sortButton/sortButton";
import { SortList } from "./products/sortButton/sortList";
import { EESpinner } from "./products/spinner/eeSpinner.js";
import { AltImage } from "./products/AltImageOnClick/altImageOnClick.js";

registerComponent({
  name: "CategoryBanner",
  component: CategoryBanner
});

registerComponent({
  name: "Filter",
  component: Filter
});

registerComponent({
  name: "BrandList",
  component: BrandList
});

registerComponent({
  name: "ColorList",
  component: ColorList
});

registerComponent({
  name: "PriceList",
  component: PriceList
});

registerComponent({
  name: "SizeList",
  component: SizeList
});

registerComponent({
  name: "TypeList",
  component: TypeList
});
registerComponent({
  name: "CrumbNav",
  component: CrumbNav
});
registerComponent({
  name: "SortButton",
  component: SortButton
});
registerComponent({
  name: "SortList",
  component: SortList
});
registerComponent({
  name: "EESpinner",
  component: EESpinner
});
registerComponent({
  name: "AltImage",
  component: AltImage
});
