import {useReducer} from 'react'

export default function NameAge() {
    const [user, dispatch] = useReducer(reducer, {
        //user에 들어갈 초기값
        username: 'taylor',
        age: 22
    })

    function onClick() {
        //plusAge라는 action을 하고싶음을 dispatch에게 알려준다.
        dispatch({type: 'plusAge'})
    }

    function onChange(e) {
        dispatch({
            //fixUsername이라는 action객체의 속성값을 적어준다.
            type: 'fixUsername',
            nextUsername: e.target.value
        })
    }

    return (
        <>
            <input value={user.username} onChange={onChange}/>
            <button onClick={onClick}>plus age</button>
            <p>hello, {user.username}. you are {user.age}</p>
        </>
    )
}

function reducer(user, action) {
    let man

    switch(action.type) {
        case 'plusAge': man = {
            username: user.username,
            age: user.age + 1
        }; break
        case 'fixUsername': man = {
            username: action.nextUsername,
            age: user.age
        }; break
        default: throw Error('unknown type: ' + action.type)
    }
    return man
}