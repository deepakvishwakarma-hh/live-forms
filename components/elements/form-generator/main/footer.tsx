
import { useAppSelector } from "../../../../state-store";
import style from "../style.module.scss";

const Footer = () => {

    const Meta = useAppSelector(store => store.__generator.__meta.__custom);

    const formLen = Meta.length;

    const onProduce = () => {

        alert('saved to storage')

        localStorage.setItem("form", JSON.stringify(Meta))
    }

    return (
        <div className={style.footer}>
            <div className={style.footer__noti}>
                <span>auto saving</span>

            </div>
            <div className={style.footer__button__wrapper}>
                <button onClick={onProduce} className={style.footer__button__produce}> Produce</button>
            </div>
        </div>
    )
}

export default Footer;  