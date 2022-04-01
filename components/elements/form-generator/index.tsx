
import style from "./style.module.scss";
import Popup from "./popup";
import Aside from "./aside";
import Main from "./main";


const FormGenerator = () => {
    return (
        <div className={style.wrapper}>

            <Aside />
            <Main />
            {/* <Popup type={'dropbox'} /> */}
        </div>
    )
}

export default FormGenerator