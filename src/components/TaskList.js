import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({allTasks}) => {
  return (
    <div>
    {allTasks.map((t) => {
      return <TaskItem task = {t} key={t.id} />
    })}
    </div>
  )
}

export default TaskList
