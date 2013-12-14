require('models/recorrido');

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