import React, { Component } from 'react';
import './App.css';
import TaskContainer from './components/TaskContainer'
import TaskForm from './components/TaskForm'
import {newTaskObj} from './utils/newTaskObj'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      allTasks: [],
      taskCount: 0,
      selectedTask: ""
    }
  }

  componentDidMount() {
    let blankTaskState = newTaskObj
    this.setState({
      selectedTask: blankTaskState
    })
  }


  createOrUpdateTask = (taskInfo) => {
    this.state.selectedTask.id == "new" ? this.createNewTask(taskInfo) : this.updateTask(taskInfo)
    this.clearTaskForm()
  }

  createNewTask = (formData) => {
    let listState = this.state.allTasks.splice(0)
    let updatedCount = this.state.taskCount + 1
    listState.push(formData)
    this.setState({
      allTasks: listState,
      taskCount: updatedCount
    })
  }

  updateTask = (task) => {
    let tsk = this.state.allTasks.find((t) => t.id == task.id)
    let updatedTasks = this.state.allTasks.splice(0)
    this.setState({
      allTasks: [
        ...updatedTasks.splice(0, updatedTasks.indexOf(tsk)),
        task,
        ... updatedTasks.splice(updatedTasks.indexOf(tsk) + 1)
       ]
    })
   }

  displayTask = (event) => {
    let tsk = event.target.id == "new" ? newTaskObj : this.state.allTasks.find((t) => t.id == event.target.id)
    this.setState({
      selectedTask: tsk
    })
  }

  clearTaskForm = () => {
    this.setState({
      selectedTask: newTaskObj
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to TaskMaster Contextualizer!</h1>

          <div className="page-container">

            <TaskContainer allTasks={this.state.allTasks} taskCount = {this.state.taskCount}  displayTask={this.displayTask} />

            <TaskForm selectedTask={this.state.selectedTask} allTasks={this.state.allTasks} taskCount = {this.state.taskCount} createOrUpdateTask={this.createOrUpdateTask} clearTaskForm={this.clearTaskForm}/>
          </div>


      </div>
    );
  }
}

export default App;
