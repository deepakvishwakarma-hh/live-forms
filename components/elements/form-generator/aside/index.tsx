import Header from "./header"
import Popup from "../popup";
import Button from "./button";
import Inspector from "../../inspector";
import style from "./aside.module.scss";
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

            <Header />

            <Inspector />

            <div className={style.aside__button__wrapper}>
                <Button name="input" onClick={onClick} />
                <Button name="textarea" onClick={onClick} />
                <Button name="dropdown" onClick={onClick} />
            </div>

            <AnimatePresence>{popupConditionallyShow && < Popup />}  </AnimatePresence>

        </div>
    )
}
export default Aside


