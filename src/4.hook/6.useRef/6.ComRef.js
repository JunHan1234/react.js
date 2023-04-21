//component를 Reference에 넣어보기.
import {forwardRef, useRef} from 'react'

//input component가 받는 property를 forwardRef의 파라미터로 넣는다.
const Input = forwardRef((props, ref) =>
    <input {...props} ref={ref}/>)

export default function ComRef() {
    const ref = useRef(null)

    function onClick() {
        ref.current.focus()
    }

    return (
        <>
            <Input ref={ref}/>
            <button onClick={onClick}>focus</button>
        </>
    )
}