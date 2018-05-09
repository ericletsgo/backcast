var VideoListEntryView = Backbone.View.extend({

  
  events: { 
    'click .video-list-entry-title': 'handleClick',
  },

  initialize: function() {
    
    this.render();
    // this.$el.click(function() {
    //   this.model.select();
    //   console.log('clicked')
    // }.bind(this));
    // this.model.on('add', this.render);
  },
  
  handleClick: function() {
    this.model.select();
    // console.log(this);
  },

  el: '.video-list',
  
  render: function() {
    this.$el.append(this.template(this.model.attributes));
    // this.$el.children().detach();
    // this.$el.append(this.template(this.model.attributes));
    // console.log(this);
    return this;
  },
  
  
  
  template: templateURL('src/templates/videoListEntry.html')

});
