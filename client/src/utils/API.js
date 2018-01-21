import axios from 'axios';

export default {

//get all
	getTasks: function() {
		return axios.get('/api/tasks');
	},
//get one?
	getOneTask: function(id) {
		return axios.get('/api/tasks/' + id)
	},

//post 
	saveTasks: function(taskdata) {
		return axios.post('/api/tasks', taskdata);
	},

//delete
	deleteTask: function(id) {
		return axios.delete('/api/tasks/' + id)
	}
};