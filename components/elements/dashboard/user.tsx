import style from "./dashboard.module.scss"

interface prop {
    user: {
        displayName: string,
        email: string,
    }
}

const User = ({ user }: prop) => {

    const avatar = user.displayName[0].toUpperCase()

    return (
        <div className={style.user}>
            <div>
                <div className={style.avatar}>
                    {avatar}
                </div>
            </div>
            <div>
                <h3>{user.displayName}</h3>
                <p>{user.email}</p>
            </div>
        </div>
    )
}
export default User