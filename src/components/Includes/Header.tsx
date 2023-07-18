import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const Header: React.FC = () => {

  const[heading, setHeading] = useState<string>('')

  useEffect(() => {
    const rawSlug = window.location.pathname.trim().split('/')[2].split('-')
    for(let i=0; i<rawSlug.length; i++){
        rawSlug[i] = rawSlug[i][0].toLocaleUpperCase() + rawSlug[i].substring(1)
    }

    const heading = rawSlug.join(' ')
    setHeading(heading)
   
  }, [])

  return (
    <div className='m-3 flex flex-row justify-between border-b-2'>
      <Link to={'/'}>
        <h5 className='mt-1 text-blue-500'>Home</h5>
      </Link>
      <h2 className='text-3xl font-semibold mb-3'>{heading}</h2>
      <Link to={'https://github.com/Prathameshp98/reactjs-mini-challenges'}>
          <img className='w-10 h-10 ' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" />
      </Link>
    </div>
  )
}

export default Header