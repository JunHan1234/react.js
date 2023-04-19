function Apple() {
    return <div>Apple</div>
}

function Pear() {
    return <div>pear</div>
}

export default function Main() {
    let fruit
    let isPaid = false

    //Apple 객체가 할당연산자에 의해 fruit변수에 들어감.
    if(isPaid) fruit = <Apple/>
    else fruit = <Pear/>

    //{}를 사용하여 JavaScript인 fruit변수 이용.
    return <div>{fruit}</div>
}