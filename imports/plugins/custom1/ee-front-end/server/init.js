function addRolesToVisitors() {
  // Adding the permission to all default roles
  Logger.info("::: Adding route permissions to default roles");
  const shop = Shops.findOne(Reaction.getShopId());
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "about" }
  });
  // Shops.update(shop._id, {
  //   $addToSet: { defaultRole: "about" }
  // });
  Shops.update(shop._id, {
    $addToSet: { defaultVisitorRole: "home" }
  });
  // Shops.update(shop._id, {
  //   $addToSet: { defaultRole: "home" }
  // });
}
Hooks.Events.add("afterCoreInit", () => {
  addRolesToVisitors();
});
