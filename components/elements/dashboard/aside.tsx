/* eslint-disable react-hooks/exhaustive-deps */
import User from "./user";
import Logo from "../../micros/Logo";
import Router from "next/router";
import style from "./dashboard.module.scss"
import { useAppSelector } from "../../../state-store";

const Aside = () => {

    const user = useAppSelector(state => state.user);

    return (
        <div className={style.aside}>

            <div className={style.logo__wrapper}>
                <Logo />
                <h3>/Dashboard</h3>

            </div>
            <div className={style.button__wrapper}>
                <button onClick={() => { Router.push('/editor') }} className={style.create__button}>+</button>
            </div>

            <User user={user as any} />

        </div>
    )
}


export default Aside;