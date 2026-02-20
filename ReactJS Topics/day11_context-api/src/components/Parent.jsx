import React, { useContext } from 'react'
import { createdContext } from './GrandParent'

const Parent = () => {
    let data = useContext(createdContext)
    console.log(data)
  return (
    <div>Parent</div>
  )
}

export default Parent