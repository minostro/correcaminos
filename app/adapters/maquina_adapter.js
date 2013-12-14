require('models/maquina');

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