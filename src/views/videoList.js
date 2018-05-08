var VideoListView = Backbone.View.extend({

  el: '.list',
  
  initialize: function() {
    this.render();
    this.collection.models.forEach(function(video) {
      new VideoListEntryView({model: video});
    });
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // console.log(this.collection);
    // this.collection.models.forEach(function(video) {
    //   new VideoListEntryView({model: video});
    // });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
