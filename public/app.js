(function() {

window.Despachador = Ember.Application.create();


})();

(function() {

var attr = Ember.attr;

Despachador.Recorrido = Ember.Model.extend({
  id: attr(),
  name: attr()
});

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

Despachador.Recorrido.adapter = Ember.Adapter.create({
  findAll: function(klass, recordArray){
    var data = [
      {id: 1, name: 'recorrido 1'},
      {id: 3, name: 'recorrido 2'}      
    ];
    recordArray.load(klass, data);
    return recordArray;
  }
});

})();

(function() {

Despachador.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return Despachador.Recorrido.find();
  }
 });

})();

(function() {

Despachador.RecorridosRoute = Ember.Route.extend({
  model: function(){
    return Despachador.Recorrido.find();
  }
})

})();

(function() {

Despachador.Router.map(function() {
  this.route("recorridos", {path: "/recorridos"});
});

})();