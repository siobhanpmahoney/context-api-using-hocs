import React from 'react'

export const Prioritize = ({props}) => {
  return (
    <select>
      <option value="high">High</option>
      <option value="regular">Regular</option>
      <option value="low">Low</option>
      <option value="complete">Complete</option>
    </select>
  )
}
