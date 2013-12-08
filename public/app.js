(function() {

window.Despachador = Ember.Application.create();


})();

(function() {

Despachador.Tests = {
	data: [1, 3, 4]
}

})();

(function() {

Despachador.ApplicationController = Ember.ObjectController.extend({
  searchTerm: null 
});

})();

(function() {

Despachador.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return Despachador.Tests;
  }
 });

})();