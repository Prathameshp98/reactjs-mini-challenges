import React, { useReducer, useRef, useEffect } from 'react';
import Button from '../../atoms/Button/Button';
interface timeState {
    isRunning: boolean,
    second: number,
    minutes: number,
    hours: number
}

type START = { type: 'START' }
type STOP = { type: 'STOP' }
type RESET = { type: 'RESET' }
type TICK = { type: 'TICK' }

type timeAction = START | STOP | RESET | TICK;

const timeReducer = (state: timeState, action: timeAction) => {
    const { type } = action;

    switch(type){
        case 'START':
            return { ...state, isRunning: true };
        case 'STOP':
            return { ...state, isRunning: false };
        case 'RESET':
            return { isRunning: false, second: 0, minutes: 0, hours: 0 };
        case 'TICK': {
            let hours:number = state.hours;
            if(state.minutes + 1 === 60){
                hours = state.hours + 1; 
            }
            let minutes:number = state.minutes;
            if(state.second + 1 === 60){
                minutes = (state.minutes + 1 === 60) ? 0 : state.minutes + 1;
            }
            const second = (state.second + 1 === 60) ? 0 : state.second + 1;
            return { 
                    ...state,
                    second: second,
                    minutes: minutes,
                    hours: 0
                };
        }
            
        default:
            throw new Error();
    }
}

const Stopwatch: React.FC = () => {

    const[state, dispatch] = useReducer(timeReducer, {isRunning: false, second: 0, minutes: 0, hours: 0 });
    const refId = useRef<any>(0);

    useEffect(() => {
        if(!state.isRunning){
            return;
        }

        refId.current = setInterval(() => dispatch({type: 'TICK'}), 1000);
        return () => {
            clearInterval(refId.current)
            refId.current = 0
        }
    }, [state.isRunning])

    return (
        <div className='my-14 flex flex-col justify-center items-center gap-12'>
            <div className='flex gap-10'>
                <p className='font-bold text-3xl'><span className='text-6xl'>{state.hours < 10 ? '0' + state.hours : state.hours}</span> h</p>
                <p className='font-bold text-3xl'><span className='text-6xl'>{state.minutes < 10 ? '0' + state.minutes : state.minutes}</span> m</p>
                <p className='font-bold text-3xl'><span className='text-6xl'>{state.second < 10 ? '0' + state.second : state.second}</span> s</p>
            </div>
            <div className='flex gap-6'>
                <Button
                    shape='rectangle'
                    text='Start'
                    textColor='text-white'
                    buttonColor='bg-lime-600'
                    onClick={() => dispatch({type: 'START'})} 
                />
                <Button
                    shape='rectangle'
                    text='Stop'
                    textColor='text-white'
                    buttonColor='bg-red-600'
                    onClick={() => dispatch({type: 'STOP'})} 
                />
                <Button
                    shape='rectangle'
                    text='Reset'
                    textColor='text-white'
                    buttonColor='bg-yellow-500'
                    onClick={() => dispatch({type: 'RESET'})}
                />
            </div>
        </div>
    )
}

export default Stopwatch