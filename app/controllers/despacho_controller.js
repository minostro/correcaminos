Correcaminos.DespachoController = Ember.ObjectController.extend({
  isSelected: false,

  actions: {
    confirmAcceptDispatch: function(){
      this.isSelected = true;
      return true;
    },
    confirmDeleteDispatch: function(){
      this.isSelected = true;
      return true;
    }
  }
})
