require('models/recorrido');

Correcaminos.Recorrido.adapter = Ember.Adapter.create({
  findAll: function(klass, recordArray){
    var data = [
      {id: 1, nombre: 'recorrido 1'},
      {id: 3, nombre: 'recorrido 2'}      
    ];
    recordArray.load(klass, data);
    return recordArray;
  }
});