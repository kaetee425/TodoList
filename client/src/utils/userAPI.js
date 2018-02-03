import axios from 'axios';

export default {
//get 
	getScore: function() {
		return axios.get('/api/current_user');
	},

//update
	editScore: function(userdata) {
		return axios.put('/api/users/', userdata)
	}
};