Despachador.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return Despachador.Recorrido.find();
  }
 });