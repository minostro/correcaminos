(function() {

window.Correcaminos = Ember.Application.create();


})();

(function() {

var attr = Ember.attr;

Correcaminos.Chofer = Ember.Model.extend({
  id: attr(),
  nombre: attr(),
  apellido: attr()  
});

})();

(function() {

var attr = Ember.attr;

Correcaminos.Maquina = Ember.Model.extend({
  id: attr(),
  patente: attr()
});

})();

(function() {

var attr = Ember.attr;

Correcaminos.Recorrido = Ember.Model.extend({
  id: attr(),
  name: attr()
});

})();

(function() {

Correcaminos.Tests = {
	data: [1, 3, 4]
}

})();

(function() {

Correcaminos.ApplicationController = Ember.ObjectController.extend({
  searchTerm: null 
});

})();

(function() {

Correcaminos.DespachadorController = Ember.ObjectController.extend({
  selectedRecorrido: null,
  selectedMaquina: null,
  selectedChofer: null,

  recorridos: function(){
    return Correcaminos.Recorrido.find();
  }.property(''),

  maquinas: function(){
    return Correcaminos.Maquina.find();
  }.property(''),

  choferes: function(){
    return Correcaminos.Chofer.find();
  }.property(''),

  actions: {
    create: function(){
      console.log(this.selectedRecorrido.get('id'));
    }
  }
});

})();

(function() {

Correcaminos.Chofer.adapter = Ember.Adapter.create({
  findAll: function(klass, recordArray){
    var data = [
      {id: 1, nombre: 'milton', apellido: 'inostroza'},
      {id: 3, nombre: 'luis', apellido: 'flores'}      
    ];
    recordArray.load(klass, data);
    return recordArray;
  }
});

})();

(function() {

Correcaminos.Maquina.adapter = Ember.Adapter.create({
  findAll: function(klass, recordArray){
    var data = [
      {id: 1, patente: 'PA-WE23'},
      {id: 3, patente: 'LE-6523'}      
    ];
    recordArray.load(klass, data);
    return recordArray;
  }
});

})();

(function() {

Correcaminos.Recorrido.adapter = Ember.Adapter.create({
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

Correcaminos.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return Correcaminos.Recorrido.find();
  }
 });

})();

(function() {

Correcaminos.DespachadorRoute = Ember.Route.extend({
  model: function(){
    return {};
  }
})

})();

(function() {

Correcaminos.Router.map(function() {
  this.route("despachador", {path: "/despachador"});
  this.route("auditor", {path: "/auditor"});
});

})();