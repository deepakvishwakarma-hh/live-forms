interface prop {
    data: any,
    update: any
}

import { Delete, Add } from "../buttons"
import { useState } from "react"
import style from "./style.module.scss"

const Options = ({ data, update }: prop) => {

    const [input, setInput] = useState<string>("")

    const onRemove = (index: number) => {

        const filteredArr = data.filter((item: string, i: number) => i !== index)
        update((prev: any) => {
            return { ...prev, options: filteredArr }
        })

    }

    const onAdd = () => {
        update((prev: any) => {
            return { ...prev, options: [...prev.options, input] }
        })
    }

    const onInputChange = (e: any) => {
        setInput(e.target.value)
    }

    const optMapper = data.map((item: any, index: number) => {
        return <li key={index}>
            <span>{item}</span>
            <Delete aspect={30} color="red" onClick={() => { onRemove(index) }} />
        </li>
    })

    return (
        <div className={style.options}>
            <h4>Dropdown Options</h4>
            <ul>{optMapper}</ul>
            <div>
                <h4>Add Dropdown Options</h4>
                <input onChange={onInputChange} type="text" placeholder="add more options" />
                <Add aspect={30} color="black" onClick={onAdd} />
            </div>
        </div>
    )

}

export default Options