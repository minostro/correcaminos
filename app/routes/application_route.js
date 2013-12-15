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
    }
  }
 });