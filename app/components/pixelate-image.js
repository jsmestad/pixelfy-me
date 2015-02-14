/*global Pixelate */

import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "img",
  attributeBindings: ["src"],
  src: "self",
  value: 0,

  performPixelation: Ember.observer("value", function() {
    var amount = this.get("value") / 100;
    if(!this.pixelate) {
      this.pixelate = new Pixelate(this.get("element"), {amount: amount});
    } else {
      this.pixelate.setAmount(amount).render();
    }
  }).on("didInsertElement")
});
