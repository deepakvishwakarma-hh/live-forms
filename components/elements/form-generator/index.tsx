
import style from "./style.module.scss";
import Aside from "./aside";
import Main from "./main";
const FormGenerator = () => {
    return (
        <div className={style.wrapper}>
            <Aside />
            <Main />
        </div>
    )
}

export default FormGenerator