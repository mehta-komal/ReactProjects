import React from 'react'

export default function Cell(box) {
  return (
    <div className='box flex' style={{backgroundColor:box.color}}>
      {box.val}
    </div>
  )
}
