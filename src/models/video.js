var Video = Backbone.Model.extend({

  initialize: function(video) {
    // this.select();
    // override youtube's complex id field
    this.set('id', video.id.videoId);
  },

  select: function() {
    this.trigger('select', this);
    // console.log('it worked');
  }

});
