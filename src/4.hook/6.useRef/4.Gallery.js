import {useRef} from 'react'
import './4.style.css'

export default function Gallery() {
    const ref = useRef(null)

    function scrollToIndex(i) {
        const cats = ref.current

        //javascript에서 특정 dom을 찾아내는 method, querySelectorAll
        const cat = cats.querySelectorAll('li > img')[i]
        //사진을 보이게 하는 method, scrollIntoView
        cat.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    return (
        <>
            <nav>
                {/* 버튼 클릭시 해당 이미지로 스크롤. */}
                <button onClick={() => scrollToIndex(0)}>cat0</button>
                <button onClick={() => scrollToIndex(1)}>cat1</button>
                <button onClick={() => scrollToIndex(2)}>cat2</button>
            </nav>

            <div>
                {/* ul객체를 ref의 current값에 집어넣는다. */}
                <ul ref={ref}>
                    <li><img src='https://placekitten.com/g/200/200'/></li>
                    <li><img src='https://placekitten.com/g/300/200'/></li>
                    <li><img src='https://placekitten.com/g/350/200'/></li>
                </ul>
            </div>
        </>
    )
}