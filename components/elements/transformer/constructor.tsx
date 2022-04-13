import style from "./style.module.scss";

interface prop {
    value: any,
}

const Constructor = ({ value }: prop) => {

    const { action, name, placeholder, options, paragraph } = value;

    const properties = { name, placeholder, required: true }

    if (action == 'input') {
        return (
            <div className={style.input} >
                <h3>{name}</h3>
                <p>{paragraph}</p>
                <input type="text" {...properties} />
            </div>)
    }
    else if (action == 'textarea') {
        return (
            <div className={style.textarea} >
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
            <div className={style.select} >
                <h3>{name}</h3>
                <p>{paragraph}</p>
                <select  {...properties} >{optMaps}</select>
            </div >)
    }
}
export default Constructor