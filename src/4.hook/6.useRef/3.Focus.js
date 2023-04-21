import {useRef} from 'react'

export default function Focus() {
    const ref = useRef(null)

    function onClick() {
        //ref.current의 textfield값에 focus를 맞춘다.
        ref.current.focus()
        console.log(ref)
    }

    return (
        <>  {/* input객체가 ref에 담긴다. */}
            <input ref={ref}/>
            <button onClick={onClick}>focus</button>
        </>
    )
}