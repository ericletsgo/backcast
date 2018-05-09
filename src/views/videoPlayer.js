var VideoPlayerView = Backbone.View.extend({
  el: '.player',

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'select', this.submitVid);
    // this.mainVid = new Video(this.template);
    // this.on('select', function() {
    //   this.$el.html(this.template(this.attributes));
    // });
    // console.log(this);
  },
  
  submitVid: function(dog) {
    // console.log(arguments)
    this.model = dog;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
