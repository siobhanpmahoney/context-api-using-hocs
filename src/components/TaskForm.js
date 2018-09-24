import React from 'react'
import {newTaskObj} from '../utils/newTaskObj'


class TaskForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      id: null,
      content: "",
      priority: "",
    }


  }

  componentDidMount() {
      let {selectedTask} = this.props
      this.setState({
        content: selectedTask.content,
        priority: selectedTask.priority,
        id: selectedTask.id
      })
  }


  componentDidUpdate(prevProps) {
    if (this.props.taskCount != prevProps.taskCount) {
      this.setState(newTaskObj)
    }
    if (this.props.selectedTask != prevProps.selectedTask) {
      this.setState(this.props.selectedTask)
    }
  }

  submit = () => {
    let createdId = this.props.selectedTask.id == "new" ? this.props.taskCount + 1 : this.props.selectedTask.id
    let taskObj = {id: createdId, content: this.state.content, priority: this.state.priority}
    this.props.createOrUpdateTask(taskObj)
  }

  captureTaskInfo = (event) => {
    let val = event.target.value
    let name = event.target.name
    let taskState = Object.assign({}, this.state)
    taskState[name] = val
    this.setState({
      [name]: val
    })
  }

  clearTaskForm = () => {
    this.setState(newTaskObj)
  }



  render() {
    return (
      <div className="new-task-form">
        <h3>Create New Task</h3>
        <form className="form">

          <select value={this.state.priority} onChange={this.captureTaskInfo} name="priority">
            <option value="" name="priorty">Select...</option>
            <option value="high" name="priorty">High</option>
            <option value="regular" name="priorty">Regular</option>
            <option value="low" name="priorty">Low</option>
            <option value="complete" name="priorty">Complete</option>
          </select>
          <input type="text" placeholder="New Task" value={this.state.content} onChange={this.captureTaskInfo} name="content" />
        </form>
        <div className="button-container">
          <button onClick={this.submit}>
            Save
          </button>

          <button onClick={this.props.clearTaskForm}>
            Clear
          </button>
        </div>

      </div>
    )
  }
}

export default TaskForm
