var VideoListView = Backbone.View.extend({

  el: '.list',
  
  initialize: function() {

    this.render();
    this.collection.models.forEach(function(video, index) {
      new VideoListEntryView({model: video});
      // console.log(index);
    });
    // console.log(this.collection)
  },

  render: function() {
    this.$el.children().detach();
    // this.collection.models.forEach(function(video) {
    //   new VideoListEntryView({'model': video});
    // });
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
