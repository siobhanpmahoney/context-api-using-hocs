import React, { Component } from 'react';
import './App.css';
import TaskContainer from './components/TaskContainer'
import TaskForm from './components/TaskForm'

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
    this.setState({
      selectedTask: "new"
    })
  }

  selectTask = (taskId) => {
    let task = ""
    if (taskId != "new") {
      task = this.state.allTasks.find((t) => t.id == taskId)
    } else {
      task = "new"
    }
    this.setState({
      selectedTask: task
    })
  }

  createOrUpdateTask = (taskInfo) => {
    this.state.selectedTask == "new" ? this.createNewTask(taskInfo) : this.updateTask(taskInfo)
  }

  createNewTask = (formData) => {
    let listState = this.state.allTasks.splice(0)
    let updatedCount = this.state.taskCount + 1
    listState.push(formData)
    this.setState({
      allTasks: listState,
      taskCount: updatedCount
    }, () => console.log("updatedState", this.state))
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
    let tsk = event.target.id == "new" ? "new" : this.state.allTasks.find((t) => t.id == event.target.id)
    this.setState({
      selectedTask: tsk
    }, () => console.log("state", this.state))
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to TaskMaster Contextualizer!</h1>

          <div className="page-container">

            <TaskContainer allTasks={this.state.allTasks} taskCount = {this.state.taskCount}  displayTask={this.displayTask} />
            
            <TaskForm selectedTask={this.state.selectedTask} allTasks={this.state.allTasks} taskCount = {this.state.taskCount} createOrUpdateTask={this.createOrUpdateTask} />
          </div>


      </div>
    );
  }
}

export default App;
