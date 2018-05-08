var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.list = new VideoListView({collection: this.videos});
    this.videoPlayer = new VideoPlayerView(this.videos.models[0]);
    this.videos.on('select', function() {
      console.log(this);
    });
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
