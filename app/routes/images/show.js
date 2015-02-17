import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor("images").findBy("id", params.id);
  },

  actions: {
    downloadImage: function() {
      var link = document.createElement("a");
      var uri = Ember.$("img.pixelated-image").attr("src");
      link.download = "pixelfy.png";
      link.href = uri;
      link.click();
    }
  }

});
