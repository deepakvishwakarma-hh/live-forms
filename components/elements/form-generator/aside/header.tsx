import { useState } from "react";
import style from "./aside.module.scss"
import { Chevron } from "../../buttons";

import {
    useAppDispatch,
    useAppSelector,
    setMetaHeaderTitle,
    setMetaHeaderSubTitle,
} from "../../../../state-store";

const Header = () => {


    const dispatch = useAppDispatch()

    const [isExpended, setExpended] = useState<boolean>(false);

    const header = useAppSelector(store => store.__generator.__meta.__header);


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

                    <input className={style.titleInput} type="text" onChange={onTitleChangeHandler} placeholder="Title" value={header.title} />

                    <label>

                        <textarea
                            onChange={onTextareaChangeHandler}
                            placeholder="paragraph...." value={header.subtitle}></textarea>

                    </label>
                </div>}

        </div>
    )
}

export default Header;