
import style from "../style.module.scss";
import Logo from "../../../micros/Logo";
import Popup from "../popup";
import Button from "./button";
import {
    setAction,
    useAppDispatch,
    useAppSelector
} from "../../../../state-store";

const Aside = () => {

    const dispatch = useAppDispatch();

    const onClick = (name: string) => {
        dispatch(setAction(name));
    }

    const Action = useAppSelector(store => store.__generator.__action)

    const popupConditionallyShow = (Action !== undefined) ? true : false;

    return (
        <div className={style.aside}>
            <Logo />
            <div className={style.aside__button__wrapper}>
                <Button name="input" onClick={onClick}>Input Box</Button>
                <Button name="textarea" onClick={onClick}>textarea Box</Button>
                <Button name="dropdown" onClick={onClick}>dropdown Box</Button>
            </div>

            {popupConditionallyShow && < Popup />}

        </div>
    )
}
export default Aside


