interface prop {
    data: any,
    index: number
}
import Editor from "./editor"
import Image from "next/image"
import { useState } from "react"
import { Delete } from "../buttons"
import style from "./inspector.module.scss"
import { useAppDispatch, deleteFromMeta } from "../../../state-store"

const Element = ({ data, index }: prop) => {

    const dispatch = useAppDispatch()

    const [isExpanded, setExpended] = useState<boolean>(false);

    const onClick = () => { setExpended(!isExpanded) }

    const onDelete = (e: any) => {

        e.stopPropagation()

        const permission = confirm('do you really want to detele them')

        permission && dispatch(deleteFromMeta(index));

    }

    const imageSrcConditonally = isExpanded ? '/chevron-up.svg' : "/chevron-down.svg";

    const isNameError = (data.name == '') ? true : false;


    return (
        <div
            style={{ background: isNameError ? '#ff000017' : 'white' }}
            className={style.element}>

            <div
                onClick={onClick}
                className={style.header}>

                <span>{data.name}
                    <p>{data.action}</p>
                </span>
                <div>
                    <Delete
                        aspect={30}
                        color="red"
                        onClick={onDelete} />
                    <Image
                        src={imageSrcConditonally}
                        width={10}
                        height={10}
                        alt="noen" />
                </div>
            </div>

            {isExpanded && <div className={style.details}>

                <Editor index={index} />

            </ div>}
        </div>
    )
}

export default Element