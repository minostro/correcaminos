var attr = Ember.attr;

Correcaminos.Chofer = Ember.Model.extend({
  id: attr(),
  nombre: attr(),
  apellido: attr()  
});