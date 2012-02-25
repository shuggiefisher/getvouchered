var express = require('express'),
	//routes = require('./routes'),
	Resource = require('express-resource');

var app = express.createServer(express.logger());

app.configure(function(){
  
  app.set("view options", {layout: false});
  
  // make a custom html template
  app.register('html', {
    compile: function(str, options){
      return function(locals){
        return str;
      };
    }
  });
  app.set('view engine', 'html'); 
  app.set('views', __dirname + '/views');
  
  
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.logger());
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.logger());
  app.use(express.errorHandler()); 
});

// Routes

//app.get('/', routes.index);
// app.get('/', './public/index.html');
// app.get('playlists', routes.playlists);

app.get('/', function(request, response) {
  response.render('index');
});


app.resource('promotions', require('./routes/promotions'));


var port = process.env.PORT || 3000;
app.listen(port, function() {
  //console.log("Listening on " + port);
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});