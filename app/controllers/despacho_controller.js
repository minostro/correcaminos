Correcaminos.DespachoController = Ember.ObjectController.extend({
  isSelected: false,

  actions: {
    confirm: function(){
      console.log(this.get('chofer').get('nombre'));
    },
    delete: function(){
      console.log(this.get('chofer').get('nombre'));
      this.isSelected = true;
      return true;
    }
  }
})