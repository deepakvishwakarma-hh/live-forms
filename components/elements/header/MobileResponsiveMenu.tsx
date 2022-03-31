//OPT

import Image from "next/image";
import { useState } from "react";
import style from "./style.module.scss";
import HireDeveloperButton from "../../micros/HireDeveloperButton";

const MobileResponsiveMenu = () => {

    const [isMenuVisible,
        setMobleVisibliy] = useState<boolean>(false)

    const toggleMobileMenu = () => {
        setMobleVisibliy(prev => !prev)
    }

    const imageSrcBasedOnState = !isMenuVisible
        ? '/menu.svg'
        : '/close.svg';

    return (
        <button
            onClick={toggleMobileMenu}
            className={style.mobile}>

            <Image
                alt="svg"
                width={30}
                height={30}
                src={imageSrcBasedOnState}
            />

            {isMenuVisible &&
                <div className={style.mobile_menu}>
                    <HireDeveloperButton />
                </div>}

        </button>
    )
}

export default MobileResponsiveMenu