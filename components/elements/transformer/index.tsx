// I thing we should use CreateElement like functionality
// convert meta code into  functional form; 

import style from "./style.module.scss";
interface prop {
    children: any
}

const Transformer = ({ children }: prop) => {

    const Form_Constructor = children.map(
        (value: any) => {

            const { action, name, placeholder, options, paragraph } = value;

            if (action == 'input') {
                return (
                    <div className={style.input}>
                        <h3>{name}</h3>
                        <p>{paragraph}</p>
                        <input type="text" name={name} placeholder={placeholder} />
                    </div>)
            }
            else if (action == 'textarea') {
                return (
                    <div className={style.textarea}>
                        <h3>{name}</h3>
                        <p>{paragraph}</p>
                        <textarea name={name} placeholder={placeholder} ></textarea>
                    </div >)
            }
            else {
                const optMaps = options?.map((value: string, index2: number) => {
                    return <option key={index2}>{value}</option>
                })
                return (
                    <div className={style.select}>
                        <h3>{name}</h3>
                        <p>{paragraph}</p>
                        <select name={name} >{optMaps}</select>
                    </div >)
            }
        })

    return (
        <div className={style.form}>
            {Form_Constructor}
        </div>
    )

}
export default Transformer


