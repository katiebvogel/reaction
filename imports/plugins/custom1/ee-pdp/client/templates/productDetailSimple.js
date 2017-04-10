import { isRevisionControlEnabled } from "/imports/plugins/core/revisions/lib/api";
// import PublishContainer from "../containers";
import { ProductDetailContainer, PublishContainer } from "../containers";

Template.eeProductDetailSimple.helpers({
  isEnabled() {
    return isRevisionControlEnabled();
  },
  PDC() {
    return ProductDetailContainer;
  }
});

Template.eeProductDetailSimpleToolbar.helpers({
  PublishContainerComponent() {
    return {
      component: PublishContainer
    };
  }
});

Template.eeProductDetailSimple.replaces("productDetailSimple");
Template.eeProductDetailSimple.inheritsHelpersFrom("productDetailSimple");
Template.eeProductDetailSimple.inheritsHooksFrom("productDetailSimple");
Template.eeProductDetailSimple.inheritsEventsFrom("productDetailSimple");
Template.eeProductDetailSimpleToolbar.replaces("productDetailSimpleToolbar");
Template.eeProductDetailSimpleToolbar.inheritsHelpersFrom("productDetailSimpleToolbar");
Template.eeProductDetailSimpleToolbar.inheritsHooksFrom("productDetailSimpleToolbar");
Template.eeProductDetailSimpleToolbar.inheritsEventsFrom("productDetailSimpleToolbar");
