import React from 'react'

export const Prioritize = ({priority, captureTaskInfo}) => {
  return (
    <select onChange={captureTaskInfo} name="priority">
      <option value="" name="priorty">Select...</option>
      <option value="high" name="priorty">High</option>
      <option value="regular" name="priorty">Regular</option>
      <option value="low" name="priorty">Low</option>
      <option value="complete" name="priorty">Complete</option>
    </select>
  )
}
