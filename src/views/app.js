var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.list = new VideoListView({collection: this.videos});
    this.videoPlayer = new VideoPlayerView({collection: this.videos, model: this.videos.models[0]});
    this.searchView = new SearchView({collection: this.videos});
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
