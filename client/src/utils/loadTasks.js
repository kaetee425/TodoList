import API from './API'

export default {
	loadTasks: () => {
		console.log("load tasks was called")
		API.getTasks()
			.then(res =>  {return res.data })
			.catch(err => console.log(err)) 
	}
}

