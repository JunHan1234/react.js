import {createContext, useContext, useState} from 'react'
import './1.style.css'

const ThemeContext = createContext(null)

export default function Welcome() {
    //useState를 이용해 theme를 변화시킬 setTheme를 준비.
    const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={theme}>
            <Form/><br/>
            <label>
                <input type='checkbox'
                    checked={theme === 'dark'}
                    onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}/>
                    use dark mode
            </label>
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

function Panel({title, children}) {
    const theme = useContext(ThemeContext)
    const className = 'panel-' + theme

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({children}) {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme

    return (
        <button className={className}>
            {children}
        </button>
    )
}