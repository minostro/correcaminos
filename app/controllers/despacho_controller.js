Correcaminos.DespachoController = Ember.ObjectController.extend({
  isSelected: false,

  actions: {
    confirm: function(){
      var model = this.get('model');
      model.set('confirmado', true);
      model.save();
    },
    confirmDeleteDespacho: function(){
      this.isSelected = true;
      return true;
    }
  }
})