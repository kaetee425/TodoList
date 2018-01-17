import axios from 'axios';

export default {
	saveTasks: function(data) {
		return axios.post('/api/tasks', data);
	},

	getTasks: function(data) {
		return axios.get('/api/tasks', data);
	}
}