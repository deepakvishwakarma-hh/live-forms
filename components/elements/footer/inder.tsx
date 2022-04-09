import style from "./style.module.scss";
import Logo from "../../micros/Logo";
import CusLink from "./CusLink";
const Footer = () => {
    return <div className={style.wrapper}>
        <Logo />
        <div>
            <CusLink href="/signup" label="Signup"></CusLink>
            <CusLink href="/login" label="Login"></CusLink>
            <CusLink href="hii" label="Services"></CusLink>
            <CusLink href="hii" label="Report Issue"></CusLink>
        </div>
    </div>
}

export default Footer