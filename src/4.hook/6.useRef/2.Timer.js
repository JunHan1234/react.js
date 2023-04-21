import {useState, useRef} from 'react'

export default function Timer() {
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    //intervalRef는 계산값이므로 state가 아니다.
    const intervalRef = useRef(null)

    function onStart() {
        setStartTime(Date.now())
        setNow(Date.now())

        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => setNow(Date.now()), 10)
    }

    function onStop() {
        clearInterval(intervalRef.current)
    }

    //경과시간
    let elapsedTime = 0
    //나누기1000으로 ms를 s로 변환
    if(startTime && now) elapsedTime = (now - startTime) / 1000

    return (
        <>  {/* toFixed는 소수점 아래 자릿수를 파라미터로 표현 */}
            <h1>{elapsedTime.toFixed(2)}</h1>
            <button onClick={onStart}>start</button>
            <button onClick={onStop}>stop</button>
        </>
    )
}