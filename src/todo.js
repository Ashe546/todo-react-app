import React from 'react'

export default function todo({todo}) {
  return (
    <div>
        <label>
            <input type= 'checkbox' checked = {todo.completed} />
        {todo.name}
        </label>
 
    </div>
  )
}
