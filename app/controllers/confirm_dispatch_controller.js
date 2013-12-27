Correcaminos.ConfirmDispatchController = Ember.Controller.extend({
  cancelButtonText: "Cancelar",
  confirmButtonText: null,
 
  model: null,
  target: null,
  action: null,
 
  actions: {
    confirm: function(){
      var target = this.get('target');
      var action = this.get('action');
      var args = [Ember.$('.clock').attr('currenttime')];
      target[action].apply(target, args);
    }
  },

  reset: function(){
    this.setProperties({
      confirmButtonText: null,
      target: null,
      action: null,
      model: null
    });
  }
});
