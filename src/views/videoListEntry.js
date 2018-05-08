var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',
  

  initialize: function() {
    this.render();
    // console.log(this);
    this.model.on('add', this.render);
  },
  
  handleClick: function() {
    this.model.select();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));

    return this;
  },
  
  events: { 
    'click .video-list-entry-title': 'handleClick',
  },
  
  template: templateURL('src/templates/videoListEntry.html')

});
