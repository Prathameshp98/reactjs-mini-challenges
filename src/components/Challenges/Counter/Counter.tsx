import React, { useRef, useState } from 'react'



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

  const resetHandler = () => {
    setValue(0)
  }

  return (
    <div className='mt-10 flex flex-col justify-center items-center gap-6'>
      <h2 className='text-5xl font-bold'>{value}</h2>
      <div className='flex flex-row gap-8'>
        <div onClick={decrementHandler} className='px-5 py-3 bg-gray-300 rounded-xl cursor-pointer'>
          <p className='text-2xl'>-</p>
        </div>
        <div onClick={incrementHandler} className='px-5 py-3 bg-gray-300 rounded-xl cursor-pointer'>
          <p className='text-2xl'>+</p>
        </div>
      </div>
      <div className='flex flex-row gap-2'>
        <p className='text-lg font-light'>Increment/Decrement by</p>
        <input ref={counter} placeholder='1' className='w-12 h-7 border-2 border-gray-500 rounded-sm !outline-none' type='number' />
      </div>
      <button onClick={resetHandler} className='px-8 py-2 rounded-md bg-gray-300 text-xl font-bold cursor-pointer'>Reset</button>
    </div>
  )
}

export default Counter