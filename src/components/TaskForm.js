import React from 'react'
import {Prioritize} from './Prioritize'

class TaskForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      content: "",
      priority: ""
    }
  }

  componentDidMount() {

  }

  submit = () => {

    let createdId = this.props.taskCount + 1

    let taskObj = {id: createdId, content: this.state.content, priority: this.state.priority}
    this.setState({
      content: "",
      priority: ""
    }, () => this.props.createNewTask(taskObj))
  }

  captureTaskInfo = (event) => {
    let val = event.target.value
    let name = event.target.name
    console.log(val)
    console.log(name)
    let taskState = Object.assign({}, this.state)
    taskState[name] = val
    this.setState({
      [name]: val
    })
  }



  render() {
    return (
      <div className="new-task-form">
        <h3>Create New Task</h3>
        <form className="form">

          <select onChange={this.captureTaskInfo} name="priority">
            <option value="" name="priorty">Select...</option>
            <option value="high" name="priorty">High</option>
            <option value="regular" name="priorty">Regular</option>
            <option value="low" name="priorty">Low</option>
            <option value="complete" name="priorty">Complete</option>
          </select>
          <input type="text" placeholder="New Task" value={this.state.content} onChange={this.captureTaskInfo} name="content" />
        </form>
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

export default TaskForm
