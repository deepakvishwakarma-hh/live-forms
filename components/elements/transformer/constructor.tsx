
import style from "./style.module.scss";

interface prop {
    value: any,
    index: number
}

const Constructor = ({ value, index }: prop) => {


    const { action, name, placeholder, options, paragraph } = value;



    if (action == 'input') {
        return (
            <div className={style.input} >
                <h3>{name}</h3>
                <p>{paragraph}</p>
                <input type="text" name={name} placeholder={placeholder} required />

            </div>)
    }
    else if (action == 'textarea') {
        return (
            <div className={style.textarea} >
                <h3>{name}</h3>
                <p>{paragraph}</p>
                <textarea name={name} placeholder={placeholder} required ></textarea>

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
                <select name={name} required >{optMaps}</select>
            </div >)
    }

}
export default Constructor