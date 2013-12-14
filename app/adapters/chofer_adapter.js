require('models/chofer');

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