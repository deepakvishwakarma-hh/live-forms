// OPT
import Option from "./popup-dropdown-options"
import { useState } from 'react'
import style from "../../style.module.scss";
import {
    useAppSelector,
    useAppDispatch,
    pushPopupOptions
} from "../../../../../state-store";

import { Add } from "../../../buttons"

const DropboxOpt = () => {

    const dispatch = useAppDispatch();

    const opt = useAppSelector(store => store.__generator.__popup.options)

    const [input, setInput] = useState<string>('')

    const onPushHandler = () => {
        // pushing irrupted when input is empty
        (input !== '')
            ? dispatch(pushPopupOptions(input))
            : alert('empty')
        // empty input after pushing
        setInput('')
    };

    const onChangeHandler = (e: any) => { setInput(e.target.value) } // input Change handler

    const optMapper = opt?.map((option: string, index: number) => <Option value={option} index={index} key={index} />) // Options mapper

    const optionUiList = (opt?.length !== 0) ? <ul> {optMapper} </ul> : <p>No options...</p> // if opt is empty, show this text

    return (
        <div className={style.popup__wrapper__dropbox}>
            <h3>Options</h3>
            {optionUiList}

            <div className={style.popup__wrapper__dropbox__input__wrapper}>
                <input
                    value={input}
                    onChange={onChangeHandler}
                    placeholder="type options"
                    type="text" />

                <Add aspect={30} color="black" onClick={onPushHandler} />
            </div>

        </div>
    )
}



export default DropboxOpt

