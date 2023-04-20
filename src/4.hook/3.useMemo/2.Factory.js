import React, {useState, useMemo} from 'react'

export default function Factory() {
    console.log('factory')

    const [carCnt, setCarCnt] = useState(0)
    const [shipCnt, setShipCnt] = useState(0)

    const makeCar = () => setCarCnt(carCnt + 1)
    const makeShip = () => setShipCnt(shipCnt + 1)

    //useMemo 있는상태. [shipCnt]에 관심을 두고 진행해보자.
    //이 경우 carCnt의 변화에는 cache값을 이용하고, shipCnt가 변화할때만,
    //function을 호출해서 cache값을 변화시킨다.
    /* let productCnt = useMemo(() => carCnt + shipCnt, [shipCnt]) */

    let productCnt = useMemo(() => carCnt + shipCnt, [carCnt, shipCnt])

    return (
        <>
            <h1>{productCnt}</h1>
            <hr/>
            <Car make={makeCar}/>{' '}
            <Ship make={makeShip}/>
        </>
    )
}

function Car({make}) {
    console.log('car')
    
    return <button onClick={make}>car</button>
}

function Ship({make}) {
    console.log('ship')
    
    return <button onClick={make}>ship</button>
}