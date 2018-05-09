var Videos = Backbone.Collection.extend({
  
  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  parse: function(data) {
    return data.items;
  },
  
  
  search: function(query) {
  
    this.fetch({
      
      data: {
        type: 'video', 
        maxResults: 5,
        q: query,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet'
      },
      
      // type: 'GET',
      
      
      
      // success: function(data) {
      //   console.info('~ Response::SUCCESS', collection, response, options);
      // },
      
      // error: function(data) {
      //     // console.info('~ Response::ERROR', collection, response, options);
      // }
    });
  }
  // fetch(data) { 
  //   $.ajax({
  //     method: "GET" 
  //     url: 'https://www.youtube.com/youtube/v3/search',
  //     // url: "test.js",
  //     // dataType: "script",
  //     data: {
  //       maxResults: 25,
  //       // 'part': 'snippet',
  //       q: 'surfing',
  //       // 'type': ''
  //       key: 'AIzaSyAmtwBoq9kLDn7XEvAD_UyK-bWxlcD328g'
  //     },
  //     success: function(data){
        
  //     },
  //     error: function(data){
        
  //     }
      
  //   });
  // }
    
});
