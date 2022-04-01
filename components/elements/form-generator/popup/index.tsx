import style from "../style.module.scss";
import Input from "../main/main-input"
import { useState } from 'react'
import DropboxOpt from "./comp/DropboxOpt"

interface prop {
    type: "input" | 'dropbox' | "textarea";
}

const Popup = ({ type }: prop) => {

    const [options, pushOptions] = useState<string[]>([])

    return (
        <div className={style.popup}>

            <div className={style.popup__wrapper}>
                <h3>{type}</h3>
                <Input
                    label={`${type} name`}
                    placeholder="ex. Recruiting Junior Web Developer" />


                <DropboxOpt
                    opt={options}
                    push={pushOptions} />
            </div>

        </div>
    )
}
export default Popup




