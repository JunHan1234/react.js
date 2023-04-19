import {useState} from 'react'

export default function Main() {
    //[첫번째 원소, 두번째 원소] = useState(초기값) //distruct
    const [count, setCount] = useState(0)

    function onClick() {
        setCount(count + 1)
    }

    return <button onClick={onClick}>{count}</button>
}