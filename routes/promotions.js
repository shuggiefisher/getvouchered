// exports.index = {
	// json: function(req, res){
     // res.send(pets);
   	// },
// 
   	// xml: function(req, res){
		// res.send('<pets>' + pets.map(function(pet){
   			// return '<pet>' + pet + '</pet>';
		// }).join('') + '</pets>');
	// }
// };

exports.index = function(req, res){
  res.send('promotion index');
};

exports.new = function(req, res){
  res.send('new promotion');
};

exports.create = function(req, res){
  res.send('create promotion');
};

exports.show = function(req, res){
  //res.send('show promotion ' + req.params.promotion);
  res.render('promotion');
};

exports.edit = function(req, res){
  res.send('edit promotion ' + req.params.promotion);
};

exports.update = function(req, res){
  res.send('update promotion ' + req.params.promotion);
};

exports.destroy = function(req, res){
  res.send('destroy promotion ' + req.params.promotion);
};