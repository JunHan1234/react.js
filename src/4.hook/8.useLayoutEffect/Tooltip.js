import {useRef, useLayoutEffect, useState} from 'react'
import {createPortal} from 'react-dom'

function TooltipContainer({x, y, ref, children}) {
    return (
        <>
            <div style={{
                position: 'absolute',
                pointerEvent: 'none',
                left: 0,
                top: 0,
                transform: `translate(${x}px, ${y}px)`
            }}>
                <div ref={ref}
                    style={{
                        color: 'white',
                        background: '#222',
                        borderRadius: '.25rem', /* JSX상에서는 속성명을 connect해서 기술한다. */
                        padding: '.25rem'
                    }}>
                    {children}
                </div>
            </div>
        </>
    )
}

function Tooltip({targetRect, children}) {
    const ref = useRef(null)
    const [tooltipHeight, setTooltipHeight] = useState(0)

    useLayoutEffect(() => {
        const {height} = ref.current.getBoundingClientRec()
        setTooltipHeight(height)
        console.log(height)
    }, [])

    let tooltipX = 0
    let tooltipY = 0
    if(targetRect) {
        tooltipX = targetRect.left
        tooltipY = targetRect.top - tooltipHeight
        if(tooltipY < 0) tooltip
    }
}