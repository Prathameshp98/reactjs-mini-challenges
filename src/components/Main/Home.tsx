import React from 'react'
import { Link } from "react-router-dom";

import challenges from '../../Data/challenges.json'

import '../../App.css';

const Home: React.FC = () => {


  return (
    <div className='m-5 flex flex-col justify-center items-center font-sans'>
      <div className='flex flex-row gap-2'>
        <h1 className='m-2 text-4xl font-bold'>Frontend Mini Challenges - ReactJS Version</h1>
        <Link to={'https://github.com/Prathameshp98'}>
          <img className='w-10 h-10 mt-2' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" />
        </Link>
      </div>
      <p className='m-2 text-lg font-medium'>Challenges built using ReactJS</p>
      <div className='m-10 flex flex-row justify-center flex-wrap gap-6 '>
        {challenges.map(each => (
          <Link to={'/challenge/' + each.slug} key={each.id}>
            <div className={`
                                w-80 h-24 border-2 border-black flex flex-col items-center justify-center shadow-xl hover:scale-105 ease-in duration-150
                                ${each.difficulty === 'easy' && 'border-green-700'}
                                ${each.difficulty === 'medium' && 'border-yellow-500'}
                                ${each.difficulty === 'hard' && 'border-red-600'}
                              `}>
              <h2 className='text-gray-600 text-xl font-bold'>{each.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home