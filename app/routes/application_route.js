Correcaminos.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return Correcaminos.Recorrido.find();
  }
 });