import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All" />
      <Button name="Songs" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="Comedy" />
      <Button name="Programming" />
    </div>
  )
}

export default ButtonList