require('models/despacho');

Correcaminos.Despacho.adapter = Ember.Adapter.create({
  findAll: function(klass, recordArray){
    var data = [
      {id: 1, dia: "2013-12-12",
        confirmado: false,
        recorrido: {id: 2, nombre: "recorrido 2"},
        maquina: {id: 1, patente: "LE-2345"},
        chofer: {id: 3, nombre: 'milton', apellido: 'inostroza'}},
      {id: 3, dia: "2013-12-14",
        confirmado: true,
        recorrido: {id: 3, nombre: "recorrido 3"},
        maquina: {id: 2, patente: "LE-234511"},
        chofer: {id: 5, nombre: 'luis', apellido: 'flores'}},
    ];
    recordArray.load(klass, data);
    return recordArray;
  },
  createRecord: function(record){
    return record.didCreateRecord();
  },
  saveRecord: function(record){
    return record.didSaveRecord();
  },
  deleteRecord: function(record){
    return record.didDeleteRecord();
  }

});

  // createRecord: function(record){
  //   var data = removeBlanks(record.toJSON());
  //   return $.ajax({
  //     method: 'post',
  //     url: "/api/v1/invoices",
  //     data: data,
  //     success: function(data){
  //       record.didCreateRecord();
  //     }
  //   });
  // },

  //   deleteRecord: function(record){
  //   return $.ajax({
  //     data: {
  //       'my_data': record.get('comment')
  //     },
  //     method: 'put',
  //     url: '/api/v20/my_endpoint/%@'.fmt(record.get('id'))
  //   });
  // },