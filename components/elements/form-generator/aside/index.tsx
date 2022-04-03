import Popup from "../popup";
import Button from "./button";
import Inspector from "../../inspector";
import Logo from "../../../micros/Logo";
import style from "../style.module.scss";
import { AnimatePresence } from "framer-motion";

import {
    setAction,
    useAppDispatch,
    useAppSelector
} from "../../../../state-store";

const Aside = () => {

    const dispatch = useAppDispatch();

    const onClick = (name: string) => { dispatch(setAction(name)) }

    const Action = useAppSelector(store => store.__generator.__action)

    const popupConditionallyShow = (Action !== undefined) ? true : false;

    return (
        <div className={style.aside}>
            <Logo />
            <div className={style.aside__button__wrapper}>
                <Button name="input" onClick={onClick} />
                <Button name="textarea" onClick={onClick} />
                <Button name="dropdown" onClick={onClick} />
            </div>

            <AnimatePresence>{popupConditionallyShow && < Popup />}  </AnimatePresence>

            <Inspector />

        </div>
    )
}
export default Aside


