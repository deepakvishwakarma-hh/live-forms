import style from "../style.module.scss";
import Transformer from "../../transformer";
import useGenerate from "../../../hooks/useGenerate";
import { useAppSelector } from "../../../../state-store";

const Main = () => {
    const gen = useGenerate()
    const onProduce = () => {
        gen.store();
    }
    const META = useAppSelector(store => store.__generator.__meta);

    return (
        <div className={style.main}>

            <div className={style.top}>
                <div className={style.top__noti}>
                    {/* <span>auto saving</span> */}
                </div>
                <div className={style.top__button__wrapper}>
                    <button onClick={onProduce} className={style.top__button__produce}> Produce</button>
                </div>
            </div>

            <div className={style.main__meta}>
                <Transformer>{META}</Transformer>
            </div>

        </div>
    )
}
export default Main