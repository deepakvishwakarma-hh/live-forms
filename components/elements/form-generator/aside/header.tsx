import { useState } from "react";
import Input from "../main/main-input"
import style from "./aside.module.scss"
import { Chevron } from "../../buttons";

import {
    useAppDispatch,
    setMetaHeaderTitle,
    setMetaHeaderSubTitle,
} from "../../../../state-store";

const Header = () => {

    const dispatch = useAppDispatch()

    const [isExpended, setExpended] = useState<boolean>(false);

    const onExpendButtonClickHandler = (e: any) => {
        // e.stopPropagation()
        setExpended(!isExpended)
    }

    const onTitleChangeHandler = (e: any) => {
        dispatch(setMetaHeaderTitle(e.target.value))
    }

    const onTextareaChangeHandler = (e: any) => {
        dispatch(setMetaHeaderSubTitle(e.target.value))
    }


    return (
        <div className={style.aside__header}>

            <Chevron
                text="header"
                isExpended={isExpended}
                className={style.header__toggle__button}
                onClick={onExpendButtonClickHandler} />

            {isExpended &&
                <div>
                    <Input
                        label=""
                        onChange={onTitleChangeHandler}
                        placeholder="Title" />

                    <label>

                        <textarea
                            onChange={onTextareaChangeHandler}
                            placeholder="paragraph...."></textarea>

                    </label>
                </div>}

        </div>
    )
}

export default Header;