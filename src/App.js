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

  createNewTask = (formData) => {
    let listState = this.state.allTasks.splice(0)
    let updatedCount = this.state.taskCount + 1
    listState.push(formData)
    this.setState({
      allTasks: listState,
      taskCount: updatedCount
    }, () => console.log("updatedState", this.state))
  }

  displayTask = (event) => {
    let tsk = this.state.allTasks.find((t) => t.id == event.target.id)
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
            <TaskForm selectedTask={this.state.selectedTask} allTasks={this.state.allTasks} taskCount = {this.state.taskCount} createNewTask={this.createNewTask} />
          </div>


      </div>
    );
  }
}

export default App;
