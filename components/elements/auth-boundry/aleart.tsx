import style from "./alert.module.scss";
import useAuth from "../../hooks/useAuth";


const Aleart = () => {

    const Auth = useAuth();

    const onLogin = () => {
        Auth.googleAuth()
    }


    return <div className={style.wrapper}>
        <div className={style.alert}>
            <h1>Login Not Found </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button onClick={onLogin}>login</button>
        </div>
    </div>
}
export default Aleart