Despachador.RecorridosRoute = Ember.Route.extend({
  model: function(){
    return Despachador.Recorrido.find();
  }
})