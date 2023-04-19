import React from 'react'
//Button module을 export한다.
//function명을 대문자로 시작해야 html tag와 구분하기 쉽다.
//학습을 위해 function명을 Main으로 통일한다.
export default function Main() {
    // return (
    //     <button>I'm a button.</button>
    // )
    return React.createElement('button', null, 'I\'m a button.')
}

// {
//     React.createElement("button", null, "I'm a button")
// }