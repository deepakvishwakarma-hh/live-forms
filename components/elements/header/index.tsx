// OPT

import Logo from "../../micros/Logo";
import style from "./style.module.scss";
import MobileResponsiveMenu from "./MobileResponsiveMenu"
import HireDeveloperButton from "../../micros/HireDeveloperButton";

interface prop {
    clean?: boolean
}

const Header = ({ clean }: prop) => (
    <nav className={style.wrapper}>
        <Logo />

        <div className={style['btn-grp']}>
            {!clean && <HireDeveloperButton />}
        </div>

        {!clean && <MobileResponsiveMenu />}

    </nav >)

export default Header;

