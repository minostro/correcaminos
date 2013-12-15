var attr = Ember.attr;
var one = Ember.belongsTo;

Correcaminos.Despacho = Ember.Model.extend({
  id: attr(),
  dia: attr(),
  confirmado: attr(),
  recorrido: one('Correcaminos.Recorrido', {key: 'recorrido', embedded: true}),
  maquina: one('Correcaminos.Maquina', {key: 'maquina', embedded: true}),
  chofer: one('Correcaminos.Chofer', {key: 'chofer', embedded: true}),
});