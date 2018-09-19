import React from 'react'
import {Prioritize} from './Prioritize'

class NewTaskForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      content: "",
      id: ""
    }
  }

  submit = () => {
    let createdId = this.props.taskCount + 1

    let taskObj = {content: this.state.content, id: createdId}
    this.setState({
      id: createdId
    }, () => this.props.createNewTask(taskObj))
  }

  captureTaskContent = (event) => {
    let val = event.target.value
    this.setState({
      content: val
    }, () => console.log(this.state.content))
  }



  render() {
    return (
      <div className="new-task-form">
      <h3>Create New Task</h3>
      <div className="form">

                  <Prioritize /><input type="text" placeholder="New Task" value={this.state.content} onChange={this.captureTaskContent}/>
      </div>
      <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

export default NewTaskForm
