// OPT
import Option from "./Option"
import { useState } from 'react'
import style from "../../style.module.scss";

interface prop {
    push: any;
    opt: string[];
}

const DropboxOpt = ({ opt, push }: prop) => {

    const [input, setInput] = useState<string>('')

    const onPushHandler = () => {
        // pushing irrupted when input is empty
        (input !== '')
            ? push((prev: string[]) => [...prev, input])
            : alert('empty')
        // empty input after pushing
        setInput('')
    };

    const onChangeHandler = (e: any) => { setInput(e.target.value) } // input Change handler

    const optMapper = opt?.map((option: string, index: number) => <Option value={option} index={index} key={index} />) // Options mapper

    const optionUiList = (opt.length !== 0) ? <ul> {optMapper} </ul> : <p>No options...</p> // if opt is empty, show this text

    return (
        <div className={style.popup__wrapper__dropbox}>
            <h3>Options</h3>
            {optionUiList}

            <input
                value={input}
                onChange={onChangeHandler}
                placeholder="type options"
                type="text" />

            <button onClick={onPushHandler}>add</button>

        </div>
    )
}



export default DropboxOpt


