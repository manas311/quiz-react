import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'
import './styles.css'

export default function Start() {
    const { setStart } = useContext(QuizContext)
    return (
        <>
        <div className='w-full flex justify-center items-center height-start'>
            <h1>Quiz App</h1> 
            <button onClick={() => setStart(true)} className='border border-green-500 p-3 text-5xl rounded btn btn-hover'>Start</button>
        </div>
        </>
    )
}