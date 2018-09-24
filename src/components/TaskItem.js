import React from 'react'

const TaskItem = ({task, displayTask}) => {
  return (
    <div id={task.id} className={task.priorty}>
      {task.content} <button onClick={displayTask} id={task.id} />
    </div>
  )
}

export default TaskItem
