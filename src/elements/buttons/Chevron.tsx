interface prop {
    text: string;
    isExpended: boolean;
    onClick: any;
    className?: any
}
import style from "./style.module.scss";

import Image from "next/image";

const Chevron = ({ isExpended, text, onClick, className }: prop) => {

    const imageSrcConditonally = isExpended
        ? '/chevron-up.svg'
        : "/chevron-down.svg";

    return (
        <button className={`${style.button__chevron} , ${className}`} onClick={onClick}>
            <span>{text}</span>
            <i>
                <Image src={imageSrcConditonally} width={10} height={10} alt='none' />
            </i>
        </button>
    )
}
export default Chevron;