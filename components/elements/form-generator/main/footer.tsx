
import style from "../style.module.scss";
import useGenerate from "../../../hooks/useGenerate";

const Footer = () => {

    const generate = useGenerate()

    const onProduce = () => {
        generate.store();
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