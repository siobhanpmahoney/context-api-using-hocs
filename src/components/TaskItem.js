import React from 'react'

const TaskItem = ({task, displayTask}) => {
  return (
    <div id={task.id} className={task.priorty}>
      {task.content}
      <button onClick={displayTask} id={task.id} className="button edit-task">
        Edit
      </button>
    </div>
  )
}

export default TaskItem
