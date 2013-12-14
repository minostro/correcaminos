Correcaminos.DespachoController = Ember.ObjectController.extend({
  actions: {
    confirm: function(){
      console.log(this.get('chofer').get('nombre'));
    },
    delete: function(){
      console.log(this.get('chofer').get('nombre'));
    }
  }
})