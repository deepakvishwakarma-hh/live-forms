import style from "./style.module.scss";

import { useRouter } from "next/router"
interface prop {
    value: any,
}

const Constructor = ({ value }: prop) => {

    const router = useRouter()

    const path = router.pathname

    const isLive = (path == '/forms/[id]');


    const { action, name, placeholder, options, paragraph } = value;

    const properties = { name, placeholder, required: true }

    if (action == 'input') {
        return (
            <div className={isLive ? style.preview__input : style.input} >
                <h3>{name}</h3>
                <p>{paragraph}</p>
                <input type="text" {...properties} />
            </div>)
    }
    else if (action == 'textarea') {
        return (
            <div className={isLive ? style.preview__textarea : style.textarea} >
                <h3>{name}</h3>
                <p>{paragraph}</p>
                <textarea  {...properties}  ></textarea>
            </div >)
    }
    else {
        const optMaps = options?.map((value: string, index2: number) => {
            return <option key={index2}>{value}</option>
        })
        return (
            <div className={isLive ? style.preview__select : style.select} >
                <h3>{name}</h3>
                <p>{paragraph}</p>
                <select  {...properties} >{optMaps}</select>
            </div >)
    }
}
export default Constructor