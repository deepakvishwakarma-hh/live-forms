// OPT ing
import Element from "./element";
import style from "./inspector.module.scss"
import { useAppSelector } from "../../../state-store";
import User from "../dashboard/user";
const Inspector = () => {
    const inputBlocks = useAppSelector(store => store.__generator.__meta.__custom)


    const inputRefList = inputBlocks.map((Ele: any, Index: number) => <Element
        key={Index} index={Index} data={Ele} />)

    return (
        <div className={style.wrapper}>
            <div className={style.top}>
            </div>
            <div className={style.element__wrapper}>
                {inputRefList}
            </div>

        </div>
    )
}

export default Inspector