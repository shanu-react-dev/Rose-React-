import React from 'react'
import { useContext } from 'react'
import { createdContext } from './GrandParent';

const Child = () => {
    let data = useContext(createdContext)
    console.log(data)
  return (
    <div>Child</div>
  )
}

export default Child