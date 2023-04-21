import {useRef} from 'react'

export default function MyRef() {
    //current속성값이 0인 객체가 ref에 담긴다.
    let ref = useRef(0)

    function onClick() {
        //클릭시 current값이 + 1 된다.
        ref.current = ref.current + 1
        console.log(ref)
    }

    return <button onClick={onClick}>click</button>
}