import {useState, useEffect, useRef} from 'react'

function Modal({isOpen, children}) {
    const ref = useRef()

    useEffect(() => {
        if(!isOpen) return
        const dialog = ref.current
        dialog.showModal()
        return () => dialog.close()
        //dialog handler를 isOpen값이 열리면 종료시킨다.
    }, [isOpen])

    return <dialog ref={ref}>{children}</dialog>
}

export default function Main() {
    const [isShow, setIsShow] = useState(false)

    return (
        <>
            <button onClick={() => setIsShow(true)}>open dialog</button>
            <Modal isOpen={isShow}>
                hello<br/><br/>
                <button onClick={() => setIsShow(false)}>close</button>
            </Modal>
        </>
    )
}