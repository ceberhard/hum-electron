/*
config.exports = {
	this.api_root = 'http://localhost:5000/api/task';
}
*/

var config = new function() {
	this.api_root = 'http://localhost:5000';
	this.task_api = this.api_root + '/api/task';
	
};
