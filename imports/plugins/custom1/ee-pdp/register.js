import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Evereve Product Detail Simple",
  name: "ee-product-detail-simple",
  icon: "fa fa-diamond",
  autoEnable: true,
  registry: [{
    route: "/product/:handle/:variantId?",
    name: "EEProduct",
    template: "eeProductDetailSimple",
    workflow: "coreProductWorkflow"
  }],
  layout: [{
    layout: "evereveLayout2",
    workflow: "coreProductWorkflow",
    collection: "Products",
    theme: "evereve-practice-theme",
    enabled: true,
    structure: {
      template: "eeProductDetailSimple",
      layoutHeader: "evereveLayoutHeader",
      layoutFooter: "evereveLayoutFooter",
      notFound: "productNotFound",
      dashboardHeader: "eeProductDetailSimpleToolbar",
      dashboardControls: "productDetailDashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
