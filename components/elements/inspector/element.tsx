interface prop {
    data: any,
    index: number
}
import { useState } from "react"
import Image from "next/image"
import style from "./style.module.scss"
import { useAppDispatch, deleteFromMeta } from "../../../state-store"

import { motion } from 'framer-motion'
import Editor from "./editor"
import { Delete } from "../buttons"


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

                <span >
                    {index + 1}. {data.name}
                    <p>{data.action}</p></span>
                <div>
                    <Delete
                        aspect={30}
                        color="red"
                        onClick={onDelete} />
                    <Image
                        src={imageSrcConditonally}
                        width={15}
                        height={15}
                        alt="noen" />
                </div>
            </div>

            {isExpanded && <div className={style.details}>

                <Editor data={data} index={index} />

            </ div>}
        </div>
    )
}

export default Element