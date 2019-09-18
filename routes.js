module.exports = function(app, db){
	app.get('/entries', function(req, res){
		var cursor = db.collection('test').find().toArray(function (err, result){
			var output = [];
			result.forEach(function(item){
				output.push(item.title + " :: " + item.comments);
			});
			res.setHeader('Content-Type', 'application/json');
			res.json(output);
		});
	});
};