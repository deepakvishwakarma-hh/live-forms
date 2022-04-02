import {
    pushMeta,
    setAction,
    setPopupName,
    useAppDispatch,
    useAppSelector,
    setPopupPlaceholder
} from "../../../../state-store";
import Input from "../main/main-input"
import style from "../style.module.scss";
import DropboxOpt from "./comp/popup-dropdown"


import { Delete, Next } from "../../buttons";
// testing


const Popup = () => {

    const dispatch = useAppDispatch();


    const action = useAppSelector(store => store.__generator.__action)

    const placeHolderNameOnChngeHandler = (e: any) => {
        dispatch(setPopupPlaceholder(e.target.value))
    }

    const inputNameOnChngeHandler = (e: any) => {
        dispatch(setPopupName(e.target.value))
    }

    const dropBoxOptConditionallyShow = (action == "dropdown") ? true : false;

    const onClose = () => {
        // nutralising generator action;
        dispatch(setAction(undefined))
    }

    const onNext = () => {
        // nutralising generator action;
        dispatch(pushMeta())
    }

    return (
        <div className={style.popup}>

            <div className={style.popup__wrapper}>
                <h4>  {action}</h4>
                <Input
                    onChange={inputNameOnChngeHandler}
                    label={`${action} name`}
                    placeholder="ex. Experiance " />
                <Input
                    onChange={placeHolderNameOnChngeHandler}
                    label={`placeholder`}
                    placeholder="ex. Experiance goes here" />

                {dropBoxOptConditionallyShow && <DropboxOpt />}

                <div className={style.popup__wrapper__button__wrapper}>
                    <Delete aspect={50} onClick={onClose} />
                    <Next aspect={45} onClick={onClose} />
                </div>


            </div>
        </div>
    )
}
export default Popup




