Correcaminos.AuditorController = Ember.Controller.extend({
  selectedDespacho: null,

  despachos: function(){
    return Correcaminos.Despacho.find();
  }.property(''),

  canShowDispatch: function(){
    return this.get('selectedDespacho') != null;
  }.property('selectedDespacho'),

  chofer: function(){
   return this.get('selectedDespacho').get('chofer');
  }.property('selectedDespacho'),

  maquina: function(){
   return this.get('selectedDespacho').get('maquina');
  }.property('selectedDespacho'),

  dispatched_at: function(){
   return this.get('selectedDespacho').get('dispatched_at');
  }.property('selectedDespacho'),

  actions: {
  }
});
