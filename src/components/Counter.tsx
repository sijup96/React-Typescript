import React, { useReducer } from 'react'

interface Action {
    type: 'increment' | 'decrement'| 'reset'
}

const counterReducer = (state: number, action: Action) => {
    switch (action.type) {
        case 'increment': return state + 1
        case 'decrement': return state - 1
        case 'reset': return state=0

        default:
            return state
    }
}
const Counter = () => {
    const [count, dispatch] = useReducer(counterReducer, 0)
    return (
        <div className='text-center flex justify-center items-center h-screen'>
            <div>counter</div>
            <button className='w-10 h-10 bg-slate-400 font-bold text-2xl rounded-sm m-8' onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <span>{count}</span>
            <button className='w-10 h-10 bg-slate-400 font-bold text-2xl rounded-sm m-8' onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button className='w-40 h-10 bg-slate-400 font-bold text-2xl rounded-sm m-8' onClick={() => dispatch({ type: 'reset' })}>Reset</button>

        </div>
    )
}

export default Counter
