import {useRef} from 'react'

export default function Focus() {
    const ref = useRef(null)

    function onClick() {
        //ref.current의 textfield값에 focus를 맞춘다.
        ref.current.focus()
    }

    return (
        <>
            <input/>
            <button onClick={onClick}>focus</button>
        </>
    )
}