import {useState, useEffect} from 'react'

export default function Pointer() {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        function onMove(e) {
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener('pointermove', onMove) //event handler로 onMove사용.
        return () => window.removeEventListener('pointermove', onMove)
    }, [])//dependency를 따로 안준다. => rendering되서 component만들어질때마다, 매번 실행된다.

    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40
            }}/>
        </>
    )
}