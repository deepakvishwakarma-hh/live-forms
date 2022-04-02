import style from "../style.module.scss";
import Header from "./main-header";
import Meta from "./main-meta";
const Main = () => {
    return (
        <div className={style.main}>
            <Header />
            <Meta />
        </div>

    )
}
export default Main