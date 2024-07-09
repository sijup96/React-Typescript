import { useEffect, useMemo, useRef, useState } from 'react'

const UseMemo = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [result, setResult] = useState<number | null>(null)
  const [array, setArray] = useState<number[]>([])

  const average = (arr: number[]) => {
    return arr.reduce((a: number, c: number) => a + c, 0) / arr.length
  }
  const avgMemo = useMemo(() => average(array), [array])
  const handleSubmit = () => {
    const arr = inputRef.current?.value.split(',').map((x) => parseFloat(x.trim())).filter((x) => !isNaN(x))
    setArray(arr || [])
  }
  useEffect(() => {
    setResult(avgMemo||null)
  }, [avgMemo])

  return (
    <div className='text-center flex flex-col justify-center items-center h-screen'>
      <div>Find Average</div>
      <input
        type='text'
        className='border border-black ml-2 mt-2'
        placeholder='Enter array elements...'
        ref={inputRef}
      />
      <button
        className='w-40 h-10 bg-slate-400 font-bold text-2xl rounded-sm mt-8'
        onClick={handleSubmit}
      >
        Submit
      </button>
      <p className='mt-4 text-xl'>Find avg using useMemo()</p>
      <p className='mt-4 text-xl'>Result: {result}</p>
    </div>
  )
}

export default UseMemo
