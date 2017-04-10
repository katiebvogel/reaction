import { Reaction } from "/server/api";

// Register package as ReactionCommerce package
Reaction.registerPackage({
  label: "Evereve Main Layout",
  name: "evereve-main-layout",
  icon: "fa fa-diamond",
  autoEnable: true,
  registry: [
    {
      route: "/tag/:slug?",
      name: "tag",
      template: "myProducts",
      workflow: "coreProductWorkflow"
    },
    {
      route: "reaction",
      name: "home",
      provide: "shortcut",
      template: "evereveHome",
      workflow: "coreWorkflow"
    },
    {
      route: "products/createProduct",
      name: "createProduct",
      label: "Add Product",
      icon: "fa fa-plus",
      template: "productDetail",
      provides: "shortcut",
      container: "addItem",
      priority: 1,
      permissions: [{
        label: "Create Product",
        permission: "createProduct"
      }]
    },
    {
      route: "about",
      name: "about",
      provides: "shortcut",
      template: "aboutUs",
      workflow: "coreWorkflow"
    }],
  layout: [{
    layout: "evereveLayout2",
    workflow: "coreProductWorkflow",
    collection: "Products",
    theme: "evereve-practice-theme",
    enabled: true,
    structure: {
      template: "productDetail",
      layoutHeader: "evereveLayoutHeader",
      layoutFooter: "evereveLayoutFooter",
      notFound: "productNotFound",
      dashboardHeader: "productDetailSimpleToolbar",
      dashboardControls: "productDetailDashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }, {
    layout: "evereveLayout2",
    workflow: "coreProductGridWorkflow",
    collection: "Products",
    theme: "evereve-practice-theme",
    enabled: true,
    structure: {
      template: "myProducts",
      layoutHeader: "evereveLayoutHeader",
      layoutFooter: "evereveLayoutFooter",
      notFound: "productNotFound",
      dashboardHeader: "gridPublishControls",
      dashboardControls: "productDetailDashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }, {
    layout: "evereveLayout2",
    workflow: "coreProductGridWorkflow",
    collection: "Products",
    theme: "evereve-practice-theme",
    enabled: true,
    structure: {
      template: "evereveContent",
      layoutHeader: "evereveLayoutHeader",
      layoutFooter: "evereveLayoutFooter",
      notFound: "productNotFound",
      dashboardHeader: "gridPublishControls",
      dashboardControls: "productDetailDashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }, {
    layout: "evereveLayout2",
    workflow: "coreWorkflow",
    collection: "Products",
    theme: "evereve-practice-theme",
    enabled: true,
    structure: {
      template: "evereveHome",
      layoutHeader: "evereveLayoutHeader",
      layoutFooter: "evereveLayoutFooter",
      notFound: "productNotFound",
      dashboardHeader: "gridPublishControls",
      dashboardControls: "productDetailDashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]
});
