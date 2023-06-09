import {useState} from 'react'

export default function House() {
    console.log('house')
    
    const [livingOn, setLivingOn] = useState(false)
    const [restOn, setRestOn] = useState(false)

    return (
        <>
            <button onClick={() => setLivingOn(!livingOn)}>거실</button>{' '}
            <button onClick={() => setRestOn(!restOn)}>화장실</button>
            <hr/>
            <LivingRoom lightOn={livingOn}/><br/>
            <RestRoom lightOn={restOn}/>
        </>
    )
}

//부모로부터 property로 lightOn을 받는다
function LivingRoom({lightOn}) {
    console.log('livingroom')

    let roomName = '거실 '
    if(lightOn) roomName += 'O'

    return roomName
}

function RestRoom({lightOn}) {
    console.log('restroom')

    let roomName = '화장실 '
    if(lightOn) roomName += 'O'

    return roomName
}