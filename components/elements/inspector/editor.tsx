interface prop {
    data: any,
    index: number
}

import style from "./style.module.scss"
import { useState, useEffect } from "react"
import {
    editFromMeta,
    useAppDispatch,
    useAppSelector
} from "../../../state-store"


import Options from "./options"

const Editor = ({ index }: prop) => {

    const Meta = useAppSelector(store => store.__generator.__meta.__custom);

    const [state, setState] = useState(Meta[index])

    const dispatch = useAppDispatch()

    const onChange = (e: any) => {

        setState({ ...state, [e.target.name]: e.target.value })
    }

    // help to fast refresh - load
    useEffect(() => { dispatch(editFromMeta({ index, object: state })) })

    return (
        <div className={style.editor}>
            <input onChange={onChange} type="text" placeholder="name" name="name" value={state.name} />
            <input onChange={onChange} type="text" placeholder="paragraph" name="paragraph" value={state.paragraph} />
            <input onChange={onChange} type="text" placeholder="placeholder" name="placeholder" value={state.placeholder} />

            {state.options && <Options data={state.options} update={setState} />}

        </div>
    )
}
export default Editor