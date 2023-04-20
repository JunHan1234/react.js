import React, {useState} from 'react'

export default function Factory() {
    console.log('factory')

    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    return (
        <>
            <button onClick={() => setCarCnt(carCnt + 1)}>car</button>{' '}
            <button onClick={() => setShipCnt(shipCnt + 1)}>ship</button>
            <hr/>
            <Car cnt={carCnt}/><br/>
            <Ship cnt={shipCnt}/>
        </>
    )
}

function Car({cnt}) {
    console.log('car')
    return `car: ${cnt}`
}

//memo는 component를 cache 한다.
const Ship = React.memo(function({cnt}) {
    console.log('ship')
    return `ship: ${cnt}`
})