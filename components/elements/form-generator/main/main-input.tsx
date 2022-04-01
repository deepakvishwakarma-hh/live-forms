import style from "../style.module.scss";

interface prop {
    label: string;
    placeholder: string;
}

const Input = ({ label, placeholder }: prop) => {
    return (
        <label className={style.main__header__wrapper__input}>
            <span>{label}</span>
            <input type="text" placeholder={placeholder} />
        </label>
    )
}
export default Input;