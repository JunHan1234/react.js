//promise는 주로 network통신에 사용된다.
import {useState, useEffect} from 'react'

async function fetchBio(person) {
    const delay = person === 'bob' ? 100 : 1000

    return new Promise(resolve =>
        setTimeout(() => resolve(`${person}'s bio.`), delay))
}

export default function Main() {
    const [person, setPerson] = useState('alice')
    const [bio, setBio] = useState(null)

    useEffect(() => {
        setBio(null)
        //promise.then
        fetchBio(person).then(result => setBio(result))
    //useEffect hander가 person이 바뀌면 작동한다.
    }, [person])

    return (
        <>
            <select value={person} onChange={e => setPerson(e.target.value)}>
                <option value='alice'>alice</option>
                <option value='bob'>bob</option>
                <option value='taylor'>taylor</option>
            </select>
            <hr/>
            <p><i>{bio ?? 'loading...'}</i></p>
        </>
    )
}