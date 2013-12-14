require('routes/**');

Correcaminos.Router.map(function() {
  this.route("despachador", {path: "/despachador"});
  this.route("auditor", {path: "/auditor"});
});