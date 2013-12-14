Correcaminos.DespachadorRoute = Ember.Route.extend({
  model: function(){
    return Correcaminos.Despacho.find();
  }
})