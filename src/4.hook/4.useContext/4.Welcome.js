import {createContext, useContext, useState} from 'react'
import './1.style.css'

const ThemeContext = createContext(null)
const CurrentUserContext = createContext(null)

export default function Welcome() {
    const [theme, setTheme] = useState('light')
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
                <WelcomePanel/><br/>
                <label>
                    <input type='checkbox'
                        checked={theme === 'dark'}
                        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}/>
                        use dark mode
                </label>
            </CurrentUserContext.Provider>
        </ThemeContext.Provider>
    )
}

function WelcomePanel() {
    //context에서 currentuser를 가져온다.
    //구조분해 할당이므로 currentUser는 {}로 감싼다.
    const {currentUser} = useContext(CurrentUserContext)

    return (
        <Panel title='welcome'>
            {currentUser ? <Greeting/> : <LoginForm/>}
        </Panel>
    )
}

function Panel({title, children}) {
    //평범한 할당이므로 theme는 {}가 필요없다.
    const theme = useContext(ThemeContext)
    const className = 'panel-' + theme

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Greeting() {
    const {currentUser} = useContext(CurrentUserContext)
    return <p>you logged in as {currentUser.username}</p>
}

function LoginForm() {
    //setter를 이용해 currentuser 정보를 greeting에 넘긴다.
    const {setCurrentUser} = useContext(CurrentUserContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const isVal = firstName && lastName

    return (
        <>
            <label>
                first name{': '}
                <input required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}/>
            </label><br/>
            <label>
                last name{': '}
                <input required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}/>
            </label><br/>
            <Button disabled={!isVal}
                onClick={() => setCurrentUser({
                    username: firstName + ' ' + lastName
                })}>
                log in
            </Button>
        </>
    )
}

function Button({disabled, onClick, children}) {
    const theme = useContext(ThemeContext)
    const className = 'button-' + theme

    return (
        <button className={className}
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>
    )
}