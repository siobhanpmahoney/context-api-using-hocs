import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({allTasks, displayTask}) => {
  return (
    <div>
    {allTasks.map((t) => {
      return <TaskItem task = {t} key={t.id} displayTask={displayTask} />
    })}
    </div>
  )
}

export default TaskList
