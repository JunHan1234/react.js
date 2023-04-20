import {createContext, useContext} from 'react'
import './1.style.css'

//context 객체 생성 -> Provider라는 속성을 미리 가지고 있다.
const ThemeContext = createContext(null)

export default function Welcome() {
    return (
        <ThemeContext.Provider value='dark'>
            <Form/>
        </ThemeContext.Provider>
    )
}

function Form() {
    return (
        <Panel title='welcome'>
            <Button>sign up</Button>
            <Button>log in</Button>
        </Panel>
    )
}

//children안에는 버튼 2개가 들어있다.
function Panel({title, children}) {
    // <ThemeContext.Provider value='dark'>의 value값이 return.
    const theme = useContext(ThemeContext)
    const className = 'panel-' + theme

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

//Button의 children은 textnode다.
function Button({children}) {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme

    return (
        <button className={className}>
            {children}
        </button>
    )
}