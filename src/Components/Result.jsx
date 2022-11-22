import React, { useContext } from 'react'
import { QuizContext } from '../Context/QuizHolder'
import './styles.css';

export default function Result() {
    const { correct, setExit, setStart, quizzes } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[50%] border shadow-lg rounded-md overflow-hidden text-center'>
                <h2 className='text-2xl p-3 my-2 btn'>{correct} are correct out of {quizzes.length}</h2>
                <button onClick={playAgain} className='border border-orange-500 p-3 text-2xl rounded btn red-btn'>Restart</button>
            </div>
        </div>
    )
}