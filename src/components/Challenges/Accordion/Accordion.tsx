import React, { useRef, useState } from 'react'

const data = [
  {
    id: 1,
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    title: 'Section 2',
    content: 'Elit ut aliquam purus sit amet luctus venenatis lectus magna. Metus aliquam eleifend mi in nulla posuere. Integer eget aliquet nibh praesent tristique magna sit.'
  },
  { 
    id: 3,
    title: 'Section 3',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 4,
    title: 'Section 4',
    content: 'Feugiat in fermentum posuere urna nec tincidunt praesent semper. Neque egestas congue quisque egestas diam in arcu cursus euismod. Scelerisque felis imperdiet proin fermentum.'
  }
]

const Accordion: React.FC = () => {

  const checkbox = useRef<HTMLInputElement>(null)
  const[visible, setVisible] = useState<any>([])

  const toggleVisiblity = (id: number) => {
    if(checkbox.current?.checked){
      if(!visible.includes(id)){
        setVisible((prev: any) => [...prev, id])  
      } else {
        setVisible((prev: any) => prev.filter((each: any) => each !== id))
      }
    } else {
      if(!visible.includes(id)){
        setVisible([id])
      } else {
        setVisible([])
      }
    }

  }

  const collapseAccordion = () => {
    setVisible([])
  }

  return (
    <div className='my-10 flex flex-col items-center gap-6'>
      <div className='flex gap-2'>
        <p className='font-light'>Is opening multiple accordion allowed? </p>
        <input ref={checkbox} onClick={collapseAccordion} defaultChecked type="checkbox" />
      </div>
      {data.map(each => (
        <div key={each.id} className='w-11/12 p-3 flex flex-col gap-3 border-2 border-gray-200'>
          <div className='flex justify-between'>
            <h3 className='text-lg font-bold'>{each.title}</h3>
            <button onClick={() => toggleVisiblity(each.id)} className='w-8 h-8 rounded-full bg-slate-300'>{visible.includes(each.id) ? '-' : '+'}</button>
          </div>
          {visible.includes(each.id) &&
            <div>
              <p className='font-light'>{each.content}</p>
            </div>
          }
        </div>
      ))}
    </div>
  )
}

export default Accordion