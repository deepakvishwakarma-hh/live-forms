import style from "../style.module.scss";
import { useAppSelector } from "../../../../state-store";
import Transformer from "../transformer";
const Meta = () => {
    const meta = useAppSelector(store => store.__generator.__meta.__custom)

    return (
        <div className={style.main__meta}>

            <Transformer>{meta}</Transformer>
        </div>
    )
}
export default Meta