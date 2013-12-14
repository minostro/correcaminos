require('models/despacho');

Correcaminos.Despacho.adapter = Ember.Adapter.create({
  findAll: function(klass, recordArray){
    var data = [
      {id: 1, dia: "2013-12-12",
        recorrido: {id: 2, nombre: "recorrido 2"},
        maquina: {id: 1, patente: "LE-2345"},
        chofer: {id: 3, nombre: 'milton', apellido: 'inostroza'}},
      {id: 3, dia: "2013-12-14",
        recorrido: {id: 3, nombre: "recorrido 3"},
        maquina: {id: 2, patente: "LE-234511"},
        chofer: {id: 5, nombre: 'luis', apellido: 'flores'}},
    ];
    recordArray.load(klass, data);
    return recordArray;
  }
});