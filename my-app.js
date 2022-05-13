var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipeOnlyClose: true,

  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
  ],
  // ... other parameters
});



var gauge = app.gauge.get('.my-gauge');

gauge.update({
  size: 100,
  borderWidth: 5,
});


function replaceContentInContainer(id, href, width = '100%', height = null) {

  document.getElementById(id).innerHTML = '<iframe width="' + '100%' + '" height="' + height + '"  src="' + href +
      '?autoplay=1&amp;loop=1&amp;" frameborder="0" allowfullscreen></iframe>'

}
