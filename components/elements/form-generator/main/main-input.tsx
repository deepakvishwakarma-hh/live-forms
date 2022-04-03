import style from "../style.module.scss";

interface prop {
    label: string;
    placeholder: string;
    onChange?: (e: any) => void;
}

const Input = ({ label, placeholder, onChange }: prop) => {
    return (
        <label className={style.main__header__wrapper__input}>
            <span>{label}</span>
            <input onChange={onChange} type="text" placeholder={placeholder} />
        </label>
    )
}
export default Input;