
import style from "./style.module.scss";
import Aside from "./aside";
import Main from "./main";
import Inspector from "../inspector";

import * as Alerts from "../alerts";


const FormGenerator = () => {
    return (
        <div className={style.wrapper}>
            <Aside />
            <Main />
            <Inspector />

            <Alerts.formCreated />
        </div>
    )
}

export default FormGenerator