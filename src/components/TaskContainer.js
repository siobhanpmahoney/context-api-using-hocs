import React from 'react'
import TaskList from './TaskList'

class TaskContainer extends React.Component {
  // componentDidUpdate(prevProps) {
  //   if (prevProps.allTasks.length != this.props.allTasks.length) {
  //     console.log(this.props.allTasks)
  //     return this.props
  //   }
  // }
  render() {
    return (
      <div className="task-container">
      {this.props.taskCount < 1 ? (
        <h2>No Tasks Created Yet!</h2>
        ) : (
          <TaskList allTasks={this.props.allTasks}/>
        )
      }
      </div>
    )
  }
}

export default TaskContainer
