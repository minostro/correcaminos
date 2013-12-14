require('models/recorrido');

Correcaminos.DespachadorController = Ember.ObjectController.extend({
  selectedRecorrido: null,
  selectedMaquina: null,
  selectedChofer: null,

  recorridos: function(){
    return Correcaminos.Recorrido.find();
  }.property(''),

  maquinas: function(){
    return Correcaminos.Maquina.find();
  }.property(''),

  choferes: function(){
    return Correcaminos.Chofer.find();
  }.property(''),

  actions: {
    create: function(){
      console.log(this.selectedRecorrido.get('id'));
    }
  }
});