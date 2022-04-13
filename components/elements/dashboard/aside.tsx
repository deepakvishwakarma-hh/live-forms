/* eslint-disable react-hooks/exhaustive-deps */
import User from "./user";
import style from "./dashboard.module.scss"
import Logo from "../../micros/Logo";
import { useAppSelector } from "../../../state-store";
import Router from "next/router";

const Aside = () => {


    const user = useAppSelector(state => state.user);




    return (
        <div className={style.aside}>

            <div className={style.logo__wrapper}>
                <Logo />
                <h3>/Dashboard</h3>

            </div>
            <div className={style.button__wrapper}>
                <button onClick={() => { Router.push('/sub/generator') }} className={style.create__button}>+</button>
            </div>

            <User user={user as any} />

        </div>
    )
}


export default Aside;