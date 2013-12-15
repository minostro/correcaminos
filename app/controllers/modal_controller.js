Correcaminos.ModalController = Ember.Controller.extend({
  cancelButtonText: "Cancel",
  message: null,
  title: null,
  confirmButtonText: null,

  target: null,
  action: null,
  args: null,

  actions: {
    confirm: function(){
      var target = this.get('target');
      var action = this.get('action');
      var args = this.get('args');

      console.log(this.get('target'));
      console.log(this.get('action'));

      target[action].apply(target, args);
    }
  },

  reset: function(){
    this.setProperties({
      confirmButtonText: null,
      target: null,
      action: null,
      args: null
    });
  }
});