Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Despachador");
  }

  data.buffer.push("<header class=\"header fixed\">\n  <div class=\"row\">\n    <div class=\"twelve columns\">\n      <nav class=\"primary-nav\">\n        <ul>\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "despachador", options) : helperMissing.call(depth0, "link-to", "despachador", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n        </ul>\n      </nav>\n    </div>\n  </div>\n</header>\n\n<div class='content clearfix'>\n  <div class='container clearfix'>\n    <section class='main'>\n      <div class='container clearfix' id='dynamic_content'>\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      <div>\n    </section>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["despachador"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <div>\n    <span>Recorrido: </span>\n    ");
  hashContexts = {'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'selection': depth0,'value': depth0,'prompt': depth0};
  hashTypes = {'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'selection': "ID",'value': "ID",'prompt': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("recorridos"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.name"),
    'selection': ("selectedRecorrido"),
    'value': ("selectedRecorrido"),
    'prompt': ("Seleccione un recorrido")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n    <span>M&aacute;quina: </span>\n    ");
  hashContexts = {'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'selection': depth0,'value': depth0,'prompt': depth0};
  hashTypes = {'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'selection': "ID",'value': "ID",'prompt': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("maquinas"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.patente"),
    'selection': ("selectedMaquina"),
    'value': ("selectedMaquina"),
    'prompt': ("Seleccione una máquina")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n    <span>Chofer: </span>\n    ");
  hashContexts = {'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'selection': depth0,'value': depth0,'prompt': depth0};
  hashTypes = {'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'selection': "ID",'value': "ID",'prompt': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'content': ("choferes"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.nombre"),
    'selection': ("selectedChofer"),
    'value': ("selectedChofer"),
    'prompt': ("Seleccione un chofer")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n    <button ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">✓ Crear</button>       \n  </div>\n</div>");
  return buffer;
  
});