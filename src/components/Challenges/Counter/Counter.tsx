import React, { useRef, useState } from 'react'

import Button from '../../atoms/Button/Button'

const Counter: React.FC = () => {

  const counter = useRef<HTMLInputElement>(null)
  const[value, setValue] = useState<number>(0)

  const incrementHandler = () => {
    if(counter.current?.value){
      const updatedValue = value + parseInt(counter.current?.value)
      setValue(updatedValue)
    }
  }

  const decrementHandler = () => {
    if(counter.current?.value){
      const updatedValue = value - parseInt(counter.current?.value)
      setValue(updatedValue)
    }
  }

  return (
    <div className='mt-10 flex flex-col justify-center items-center gap-6'>
      <h2 className='text-5xl font-bold'>{value}</h2>
      <div className='flex flex-row gap-8'>
        <Button
          shape='circle'
          text='-'
          textColor='text-black'
          buttonColor='bg-gray-300'
          onClick={decrementHandler}
        />
        <Button
          shape='circle'
          text='+'
          textColor='text-black'
          buttonColor='bg-gray-300'
          onClick={incrementHandler}
        />
      </div>
      <div className='flex flex-row gap-2'>
        <p className='text-lg font-light'>Increment/Decrement by</p>
        <input ref={counter} placeholder='0' className='w-12 h-7 border-2 border-gray-500 rounded-sm !outline-none' type='number' />
      </div>
      <Button 
        shape='rectangle'
        onClick={() => setValue(0)} 
        textColor='bg-gray-300'
        buttonColor='text-black'
        text='Reset'
      />
    </div>
  )
}

export default Counter