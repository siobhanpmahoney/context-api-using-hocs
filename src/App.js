import React, { Component } from 'react';
import './App.css';
import PageContainer from './components/PageContainer'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      allTasks: [],
      taskCount: 0
    }
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

  render() {
    return (
      <div className="App">
        <h1>Welcome to TaskMaster Contextualizer!</h1>

        <PageContainer allTasks={this.state.allTasks} taskCount = {this.state.taskCount} createNewTask={this.createNewTask}/>
      </div>
    );
  }
}

export default App;
