import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}
const CustomInput = forwardRef<HTMLInputElement,InputProps>((props, ref) => (
  <input type="text" ref={ref} {...props} />
))

export default CustomInput
