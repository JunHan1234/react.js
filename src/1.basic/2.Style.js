import './2.style.css'

const user = {
    username: 'heday',
    faceImgUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    faceImgSize: 90
}

export default function Profile() {
    return (
        <> {/* JSX 문법, xml문서, fragment */}
            <h1>{user.username}</h1>
            <img className='avatar'
                src={user.faceImgUrl}
                style={{
                    width: user.faceImgSize,
                    height: user.faceImgSize
                }}/>
        </>
    )
}