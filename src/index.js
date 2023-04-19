import ReactDOM from 'react-dom/client'
import App from './1.basic/App'

//react 객체
ReactDOM.createRoot(
    //DOM 객체
    document.getElementById('root')
//render(그리다)App component를 call한다.    
).render(<App/>)