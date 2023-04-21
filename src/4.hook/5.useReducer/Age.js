import {useReducer} from 'react'

export default function Age() {
    //dispatch = 분기(오른쪽으로 왼쪽으로 나눠지는 분기)
    //reducer라는 function, {초기값}객체
    //reducer의 return 값을 state에 넣는다.
    const [state, dispatch] = useReducer(reducer, {age: 22})

    return (
        <>  {/*dispatch의 파라미터는 useReducer가 알아듣게 객체로 표현하면 된다.*/}
            <button onClick={() => dispatch({type: 'plusAge'})}>
                plus age
            </button>
            <p>you are {state.age}</p>
        </>
    )
}

function reducer(state, action) {
    //dispatch의 객체의 property가 type이므로 action.type으로 받아준다.
    if(action.type === 'plusAge')
        return {age: state.age + 1}
    throw Error('unknown state')
}