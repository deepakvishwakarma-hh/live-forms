import style from "../style.module.scss";
import Transformer from "../../transformer";
import { useAppSelector } from "../../../../state-store";


import Footer from "./footer"


const Main = () => {
    const META = useAppSelector(store => store.__generator.__meta);
    return (
        <div className={style.main}>

            <div className={style.main__meta}>
                <Transformer >{META}</Transformer>
            </div>

            <Footer />
        </div>
    )
}
export default Main