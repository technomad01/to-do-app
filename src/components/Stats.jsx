import React from 'react'

const Stats = ( {toDoList} ) => {
    let countList = toDoList.length;
  return (
    <div className='stats'>
        <p className='notify'>
            {countList=== 0 
            ? 'You got everything!'
            : `There are ${countList} tasks in your list.` }
        </p>
        
    </div>
  )
}

export default Stats