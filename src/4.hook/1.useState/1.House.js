import {useState} from 'react';

export default function Main() {
    console.log('House')

    return (
        <>
            <LivingRoom/>{' '}
            <RestRoom/>{' '}
            <BedRoom/>
        </>
    )
}

function LivingRoom() {
    console.log('LivingRoom')
    
    //전등 state는 나만 가지고 있다.
    const [isLight, setIsLight] = useState(false) //디폴트는 꺼진상태.
    let roomName = '거실 '
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}

function RestRoom() {
    console.log('RestRoom')

    const [isLight, setIsLight] = useState(false)
    let roomName = '화장실 '
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}

function BedRoom() {
    console.log('BedRoom')

    const [isLight, setIsLight] = useState(false)
    let roomName = '침실 '
    if(isLight) roomName += 'O'

    return <button onClick={() => setIsLight(!isLight)}>{roomName}</button>
}