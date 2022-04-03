
import Element from "./element";
import { useAppSelector } from "../../../state-store";
import style from "./style.module.scss"


const Inspector = () => {
    const Meta = useAppSelector(store => store.__generator.__meta.__custom)

    const elementMapper = Meta.map((ele: any, index: number) => {
        return <Element key={index} index={index} data={ele} />
    })

    return (
        <div className={style.wrapper}>
            <h3>Inspector</h3>
            <div className={style.element__wrapper}>
                {elementMapper}
            </div>
        </div>
    )
}

export default Inspector