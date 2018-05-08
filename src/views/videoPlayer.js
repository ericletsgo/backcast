var VideoPlayerView = Backbone.View.extend({
  el: '.player',

  initialize: function() {
    this.render();
    // this.mainVid = new Video(this.template);
    this.on('select', function() {
      this.$el.html(this.template(this.attributes));
    });
    // console.log(this);
  },

  render: function() {
    console.log(this);
    this.$el.html(this.template(this.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
