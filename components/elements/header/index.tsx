// OPT

import Logo from "../../micros/Logo";
import style from "./style.module.scss";
import MobileResponsiveMenu from "./MobileResponsiveMenu"
import HireDeveloperButton from "../../micros/HireDeveloperButton";

const Header = () => (
    <nav className={style.wrapper}>
        <Logo />
        <div className={style['btn-grp']}>
            <HireDeveloperButton />
        </div>

        <MobileResponsiveMenu />
    </nav >)

export default Header;

