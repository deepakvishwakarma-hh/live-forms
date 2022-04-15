import {
    pushMeta,
    setAction,
    setPopupName,
    useAppDispatch,
    useAppSelector,
    setPopupParagraph,
    setPopupPlaceholder
} from "../../../../state-store";

import { motion } from 'framer-motion'
import Input from "../main/main-input"
import style from "./popup.module.scss";
import { Delete, Next } from "../../buttons";
import DropboxOpt from "./comp/popup-dropdown"


const Popup = () => {

    const dispatch = useAppDispatch();

    const action = useAppSelector(store => store.__generator.__action)

    const placeHolderNameOnChngeHandler = (e: any) => {
        dispatch(setPopupPlaceholder(e.target.value))
    }

    const inputNameOnChngeHandler = (e: any) => {
        dispatch(setPopupName(e.target.value))
    }
    const inputParagraphOnChngeHandler = (e: any) => {

        dispatch(setPopupParagraph(e.target.value))
    }

    const dropBoxOptConditionallyShow = (action == "dropdown") ? true : false;

    const onClose = () => {
        dispatch(setAction(undefined))
    }

    const onPush = () => {
        dispatch(pushMeta())
    }

    const animationProperties = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: .1 }
    }

    const onKeyUp = (event: any) => {

        // push and hide
        if (event.keyCode === 13) {
            onPush()
            onClose()
        }

        // hide the popup
        if (event.keyCode === 27) {
            onClose()
        }

    }

    return (
        <motion.div {...animationProperties} onKeyUp={onKeyUp
        } className={style.popup}>

            <div className={style.popup__wrapper}>
                <h4> {action}   </h4>
                <Input
                    onChange={inputNameOnChngeHandler}
                    label={`name`}
                    placeholder="ex. Experiance " />
                <Input
                    onChange={inputParagraphOnChngeHandler}
                    label={`paragraph`}
                    placeholder="ex. Experiance in IT" />
                <Input
                    onChange={placeHolderNameOnChngeHandler}
                    label={`placeholder`}
                    placeholder="ex. Experiance goes here" />

                {dropBoxOptConditionallyShow && <DropboxOpt />}

                <div className={style.popup__wrapper__button__wrapper}>
                    <Delete color="red" aspect={40} onClick={onClose} />
                    <Next color="black" aspect={40} onClick={onPush} />
                </div>
            </div>
        </motion.div>
    )
}
export default Popup




