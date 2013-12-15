Correcaminos.DespachadorController = Ember.ArrayController.extend({
  itemController: 'despacho',

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

  getDespachosNoConfirmados: function(){
    return this.filterProperty('confirmado', false);
  }.property('@each.confirmado'),

  getDespachosConfirmados: function(){
    return this.filterProperty('confirmado', true);
  }.property('@each.confirmado'),


  actions: {
    create: function(){
      var despacho = Correcaminos.Despacho.create({
        dia: "2013-12-12",
        confirmado: false,
        recorrido: this.selectedRecorrido,
        maquina: this.selectedMaquina,
        chofer: this.selectedChofer
      });
      despacho.save();
    },
    delete: function(){
      var controller = this;
      this.filterProperty('isSelected').forEach(function(itemController){
        var model = itemController.get('model');
        model.deleteRecord();
        model.save();
        controller.removeObjects(itemController);
      })
    }
  }
});