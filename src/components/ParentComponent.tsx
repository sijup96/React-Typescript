import  { useRef } from 'react'
import CustomInput from './CustomInput'

const ParentComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default ParentComponent
