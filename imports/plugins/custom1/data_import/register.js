import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "Evereve Data Import",
  name: "EverDataImport",
  icon: "evereve",
  autoEnable: true,
  registry: [
    {
      workflow: "coreWorkflow"
    }
  ],
  layout: [{
    workflow: "coreWorkflow",
    theme: "default",
    enabled: true
  }]
});
