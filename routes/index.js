var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.viewAlt = function(request, response){
	for(i in projects.projects){
		projects.projects[i]["viewAlt"] = true;
	}
  	response.render('index', projects);
};

exports.view = function(request, response){
	for(i in projects.projects){
		projects.projects[i]["viewAlt"] = false;
	}
  	response.render('index', projects);
};