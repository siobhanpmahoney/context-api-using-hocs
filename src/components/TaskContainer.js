import React from 'react'
import TaskList from './TaskList'

class TaskContainer extends React.Component {

  render() {
    return (
      <div className="task-container">
        <button id="new" onClick={this.props.displayTask}>
          New Task
        </button>
      {this.props.taskCount < 1 ? (
        <h2>No Tasks Created Yet!</h2>
        ) : (
          <TaskList allTasks={this.props.allTasks} displayTask={this.props.displayTask}/>
        )
      }
      </div>
    )
  }
}

export default TaskContainer
