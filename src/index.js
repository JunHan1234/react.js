import ReactDOM from 'react-dom/client'
//import App from './1.basic/App'

//default 이름은 Game 이외에 임의로(현재 App) 정할 수 있다.
//import App from './2.tictactoe/App'

//import App from './3.thinking/App'

import App from './4.hook/App'

//react 객체
ReactDOM.createRoot(
    //DOM 객체
    document.getElementById('root')
//render(그리다)App component를 call한다.    
).render(<App/>)