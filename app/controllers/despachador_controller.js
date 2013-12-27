var isValid = function(data){
  return data.filter(function(ele) {return ele == null}).length == 0;
};

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

  deleteDispatch: function(){
    var controller = this;
    this.filterProperty('isSelected').forEach(function(itemController){
      var model = itemController.get('model');
      model.deleteRecord();
      model.save();
      controller.removeObjects(itemController);
      controller.send('closeModal');
      controller.send('flashSuccess', 'Despacho eliminado');
    })
  },
  confirmDispatch: function(dispatched_at){
    var controller = this;
    this.filterProperty('isSelected').forEach(function(itemController){
      var model = itemController.get('model');
      model.set('confirmado', true);
      model.set('dispatched_at', dispatched_at);
      model.save();
      controller.send('closeConfirmDispatchModal');
      controller.send('flashSuccess', 'Despacho confirmado');
    })
  },
 
  actions: {
    create: function(){
      var controller = this;
      if (!isValid([this.selectedRecorrido, this.selectedMaquina, this.selectedChofer])) {
        controller.send('flashError', 'Todos los campos son obligatorios');
        return false;
      }

      var despacho = Correcaminos.Despacho.create({
        dia: "2013-12-12",
        confirmado: false,
        recorrido: this.selectedRecorrido,
        maquina: this.selectedMaquina,
        chofer: this.selectedChofer
      });
      despacho.save();
      controller.send('flashSuccess', 'Despacho creado');
    },
    confirmDeleteDispatch: function(){
      this.send("openModal", {
        message: "seguro?",
        confirmButtonText: "Delete Despacho",
        target: this,
        action: 'deleteDispatch',
	model: this.filterProperty('isSelected', true)[0]
      })
    },
    confirmAcceptDispatch: function(){
      this.send("openConfirmDispatchModal",{
        confirmButtonText: "Confirmar Despacho",
        target: this,
        action: 'confirmDispatch',
        model: this.filterProperty('isSelected', true)[0]
      })
    }
  }
});
