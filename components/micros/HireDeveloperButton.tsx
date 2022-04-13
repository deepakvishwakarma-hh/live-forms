import micro from './micro.module.scss'
import useAuth from '../hooks/useAuth'

const HireDeveloperButton = () => {

    const Auth = useAuth()

    const onClick = (e: any) => {
        e.stopPropagation()
        Auth.loginOnHomePage()
    }

    return <button onClick={onClick} className={micro.hiredeveloperbutton}>Get started</button>
}

export default HireDeveloperButton