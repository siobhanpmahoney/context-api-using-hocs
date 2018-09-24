import React from 'react'

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
    if (this.props.selectedTask != "new") {
      let {selectedTask} = this.props
      this.setState({
        content: selectedTask.content,
        priority: selectedTask.priority,
        id: selectedTask.id
      })
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedTask != prevProps.selectedTask) {
      if (this.props.selectedTask != "new") {
        let {selectedTask} = this.props
        this.setState({
          content: selectedTask.content,
          priority: selectedTask.priority,
          id: selectedTask.id
        })
      } else {
        this.setState({
          id: null,
          content: "",
          priority: ""
        })
      }
    }
  }

  submit = () => {
    let createdId = this.props.selectedTask == "new" ? this.props.taskCount + 1 : this.props.selectedTask.id
    let taskObj = {id: createdId, content: this.state.content, priority: this.state.priority}
    this.setState({
      id: null,
      content: "",
      priority: ""
    }, () => this.props.createOrUpdateTask(taskObj))
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
    this.setState({
      id: null,
      content: "",
      priority: ""
    })
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

          <button onClick={this.clearTaskForm}>
            Clear
          </button>
        </div>

      </div>
    )
  }
}

export default TaskForm
