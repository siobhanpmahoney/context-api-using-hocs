import React, { Component } from 'react';
import './App.css';
import PageContainer from './components/PageContainer'

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
    console.log("formData", formData)
    let listState = this.state.allTasks.splice(0)
    let updatedCount = this.state.taskCount + 1
    listState.push(formData)
    this.setState({
      allTasks: listState,
      taskCount: updatedCount
    }, () => console.log("updatedState", this.state))
  }

  displayTask = (event) => {
    
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to TaskMaster Contextualizer!</h1>

        <PageContainer selectedTask={this.state.selectedTask} allTasks={this.state.allTasks} taskCount = {this.state.taskCount} createNewTask={this.createNewTask}/>
      </div>
    );
  }
}

export default App;
