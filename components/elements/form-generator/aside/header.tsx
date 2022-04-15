import style from "./aside.module.scss"

import {
    useAppDispatch,
    useAppSelector,
    setMetaHeaderTitle,
    setMetaHeaderSubTitle,
} from "../../../../state-store";

const Header = () => {


    const dispatch = useAppDispatch()


    const header = useAppSelector(store => store.__generator.__meta.__header);

    const onTitleChangeHandler = (e: any) => {
        dispatch(setMetaHeaderTitle(e.target.value))
    }

    const onTextareaChangeHandler = (e: any) => {
        dispatch(setMetaHeaderSubTitle(e.target.value))
    }


    return (
        <div className={style.aside__header}>

            <div>

                <input className={style.titleInput} type="text" onChange={onTitleChangeHandler} placeholder="Title" value={header.title} />

                <label>

                    <textarea
                        onChange={onTextareaChangeHandler}
                        placeholder="paragraph...." value={header.subtitle}></textarea>

                </label>
            </div>

        </div>
    )
}

export default Header;