import style from "../style.module.scss";
import Transformer from "../../transformer";
import { useAppSelector } from "../../../../state-store";

const Main = () => {
    const META = useAppSelector(store => store.__generator.__meta.__custom);
    return (
        <div className={style.main}>

            {/* ff  */}

            <div className={style.main__meta}>
                <Transformer>{META}</Transformer>
            </div>
        </div>
    )
}
export default Main