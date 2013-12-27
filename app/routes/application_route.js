Correcaminos.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return Correcaminos.Recorrido.find();
  },
  actions: {
    flashSuccess: function(message){
      this.controllerFor('flash').success(message);
      this.render('flash', {
        into: 'application',
        outlet: 'flash'
      });
    },
    flashError: function(message){
      this.controllerFor('flash').error(message);
      this.render('flash', {
        into: 'application',
        outlet: 'flash'
      });
    },
    openModal: function(options){
      this.controllerFor('modal').setProperties(options);

      this.render('modal', {
        into: 'application',
        outlet: 'modal'
      });
    },
    closeModal: function(){
      this.controllerFor('modal').reset();

      this.render('empty', {
        into: 'application',
        outlet: 'modal'
      });
    },
    openConfirmDispatchModal: function(options){
      this.controllerFor('confirm_dispatch').setProperties(options);

      this.render('confirm_dispatch', {
        into: 'application',
        outlet: 'modal'
      });
    },
    closeConfirmDispatchModal: function(){
      this.controllerFor('confirm_dispatch').reset();

      this.render('empty', {
        into: 'application',
        outlet: 'modal'
      });
    }
  }
 });
