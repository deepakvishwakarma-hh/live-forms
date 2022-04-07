
import Element from "./element";
import { useState } from "react";
import { Chevron } from "../buttons";
import style from "./inspector.module.scss"
import { useAppSelector } from "../../../state-store";

const Inspector = () => {

    const [isExpended, setExpended] = useState<boolean>(false);

    const onExpendButtonClickHandler = () => { setExpended(!isExpended) }

    const Meta = useAppSelector(store => store.__generator.__meta.__custom)

    const elementMapper = Meta.map((ele: any, index: number) => {
        return <Element key={index} index={index} data={ele} />
    })

    return (
        <div className={style.wrapper}>
            <Chevron
                className={style.button__chevron}
                text="Inspector"
                isExpended={isExpended}
                onClick={onExpendButtonClickHandler} />

            {isExpended &&
                <div className={style.element__wrapper}>
                    {elementMapper}
                </div>
            }
        </div>
    )
}

export default Inspector