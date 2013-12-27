Correcaminos.ClockDespachoComponent = Ember.Component.extend({
  didInsertElement: function(){
    jQuery('.clock').jclock({format: '%A %B %d, %Y %H:%M:%S'});
  }
});
