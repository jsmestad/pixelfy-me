import Ember from 'ember';
import Image from '../models/image';

export default Ember.Route.extend({
  model: function() {
    return [
      Image.create({url: '/img/flippin-sweet.jpg', id: "1"})
    ];
  }
});
