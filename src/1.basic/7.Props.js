import {useState} from 'react'

function Button({count, onClick}) {
    return <button onClick={onClick}>{count} times</button> //Property는 남의것을 받는다.
}

export default function Main() {
    const [count, setCount] = useState(0) //State는 내것을 이용한다.

    function onClick() {
        setCount(count + 1)
    }

    return (
        <>
            <Button count={count} onClick={onClick}/>
            <Button count={count} onClick={onClick}/>
        </>
    )
}
// 다음과 같은 property가 Button function call시 각각 속성값으로 할당된다.
// {
//     count: 10,
//     onClick: onClick()
// }

// export default Main 으로 마지막에 export해도 된다.