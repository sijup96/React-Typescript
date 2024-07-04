import  { useReducer } from 'react'
import counterReducer from '../reducers/counterReducer'


const initialState={
    value:0
}
const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    return (
        <div>
            <div className='text-center flex justify-center items-center h-screen'>
                <div>counter</div>
                <button className='w-10 h-10 bg-slate-400 font-bold text-2xl rounded-sm m-8' onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <span className='font-extrabold text-2xl text-white bg-black w-8'>{state.value}</span>
                <button className='w-10 h-10 bg-slate-400 font-bold text-2xl rounded-sm m-8' onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button className='w-40 h-10 bg-slate-400 font-bold text-2xl rounded-sm m-8' onClick={() => dispatch({ type: 'reset' })}>Reset</button>


                <p className='absolute bottom-72 text-xl'>counter using useReducer()</p>
            </div>
            
        </div>
    )
}

export default Counter
