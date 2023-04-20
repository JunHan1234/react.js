//default로 export한 것이 아니면 {}를 사용한다.
import {useState} from 'react'

export default function Square({value, onClick}) {
    return (
        <button className='square'
                onClick={onClick}>
            {value}
        </button>
    )
}