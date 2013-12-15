Correcaminos.FlashController = Ember.Controller.extend({
  flashDuration: 5000,

  success: function(value) {
    this.set('message', value);
    this.set('successful', true);
    this.scheduleRemoveFlash();
  },

  error: function(value) {
    this.set('message', value);
    this.set('successful', false);
    this.scheduleRemoveFlash();
  },

  scheduleRemoveFlash: function() {
    var _this = this;
    if(Ember.testing) { return }
    setTimeout(function() {
      _this.set('message', null);
    }, _this.flashDuration);
  }
});