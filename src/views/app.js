var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.list = new VideoListView({collection: this.videos});
    this.videoPlayer = new VideoPlayerView();
    this.render();
    // this.listEntry.on('add', this.listEntry.render());
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
