
import style from "./style.module.scss";
import Aside from "./aside";
import Main from "./main";


import * as Alerts from "../alerts";


const FormGenerator = () => {
    return (
        <div className={style.wrapper}>
            <Aside />
            <Main />

            <Alerts.formCreated />
        </div>
    )
}

export default FormGenerator