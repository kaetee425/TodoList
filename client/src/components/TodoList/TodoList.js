import React, { Component } from 'react'
import TodoListItems from './TodoListItems'
import API from '../../utils/API';
import userAPI from '../../utils/userAPI'
import DeleteBtn from '../DeleteBtn/DeleteBtn'
import Clock from '../Clock/Clock'
import './TodoList.css'
import Cat from '../Cat/Cat'

// import moment from 'moment'
// import CountdownTime from 'react-awesome-countdowntimer'
// import * as Datetime from 'react-datetime'

class TodoList extends Component { 
	constructor(props) {
		super(props);

		this.state = {
			completeClicked: false,
			catclicked: false,
			alive: 0,
			dead: 0
		}

		this.handleAddCat = this.handleAddCat.bind(this);
		this.comboFunct = this.comboFunct.bind(this);
	}
// ++ for each click for cats (add one to set state?)

	secondTime(potato) {
	  const newDate = Date.parse(potato)
	  return newDate
	}

	prettyTime(chickens) {
		const prettyTime = new Date(chickens).toString()
		return prettyTime
	}

	//delete? edit?
	deleteTask = (id) => {
		this.state.dead += 1

		userAPI.editScore({ dead: this.state.dead })
			// .then(res => this.props.loadTodos())
			.catch(err => console.error(err))

		console.log(id)
		API.deleteTask(id)
			.then(res => this.props.loadTodos())
			.catch(err => console.error(err))


	}

	deleteDone = (id) => {
		console.log(id)
		API.deleteTask(id)
			.then(res => this.props.loadTodos())
			.catch(err => console.error(err))
	}

	editTask = (id) => {
		console.log('HERE: ', !this.state.completeClicked)
		API.editTask(id, {complete: !this.state.completeClicked})
		//taskdata = object that was completed to true (hardcoded)
			.then(res => this.props.loadTodos())
			.catch(err => console.error(err))
	}

//scoring 
	getUserData = (id) => {
		userAPI.getScore()
			.then( res => this.setState({
				alive: res.data.alive,
				dead: res.data.dead
			}))
			.catch(err => console.error(err));

	}

	onScoreChange = (event) => {
		this.setState({
			alive: event.target.value,
			dead: event.target.value
		})
	}

	handleAddCat () {
		console.log("clicked!!")
		this.setState({
			catclicked: true
		})
	}

	comboFunct(task, id) {
		{this.state.completeClicked ? this.setState({completeClicked: false}) : this.setState({completeClicked: true})}
		this.editTask(task._id, task.complete)
		// alive score ++

		this.handleAddCat();
		// alive score +1 

		this.state.alive += 1
		this.deleteDone(task._id)
		
		//expecting id and userdata
		userAPI.editScore({
			alive: this.state.alive,
			dead: this.state.dead
		})
			// .then(res => this.props.loadTodos())
			.catch(err => console.error(err))

	}


	render() {
	    console.log(this.state.completeClicked)
	    return (
		<div> 
		  <div className="litterBox"> 
	 		<h1>Litter Box</h1>
	   		{this.state.catclicked? <Cat /> : <div></div>}

	   		<div className="container">
		   		<ul className="scoring row">
		   			<li className="alive col-md"><span onScoreChange={this.onScoreChange}>{this.state.alive}</span>  Alive</li>
		   			<li className="dead col-md"><span onScoreChange={this.onScoreChange}>{this.state.dead}</span>  Dead</li>
		   		</ul>
	   		</div>
	      </div>

	      <div className="container todos">
	      <div className="row">
	          {this.props.todos.map( task => {
	            return (
	        	<div className="taskList col-md">
	              <TodoListItems key={task._id}>
	            	<div className="card text-center">	
	            	
		            	<div className="card-header">
		               		<h3 id="taskdata">Task: {task.task}</h3>
		                </div>

		                <div className="card-body">
		                	<Clock dueDate={this.secondTime(task.dueDate)}/> 
		                </div>
		                
		                <div className="card-footer text-muted">
			                <button id="deleteBtn" onClick={() => this.deleteTask(task._id)}> Delete </button>
			                <button 
			                  id="doneBtn"
			                  onClick={() => {this.comboFunct(task)}}
			                > 
			                  Done!!! 
			                </button>
		                </div>

	            	</div>

	             	</TodoListItems>
	      	  	</div>
	            )
	          })}
	       </div>
	       </div>
	    </div>
	    )
	}
}

export default TodoList