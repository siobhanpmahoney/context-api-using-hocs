import React from 'react'
import TaskContainer from './TaskContainer'
import TaskForm from './TaskForm'

class PageContainer extends React.Component {
  render() {
    return (
      <div className="page-container">
        <TaskContainer allTasks = {this.props.allTasks} taskCount = {this.props.taskCount} />
        <TaskForm allTasks = {this.props.allTasks} taskCount = {this.props.taskCount} createNewTask={this.props.createNewTask}/>
      </div>
    )
  }
}

export default PageContainer
