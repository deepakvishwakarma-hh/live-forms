// used in only popup

import style from "../style.module.scss";

interface prop {
    label: string;
    placeholder: string;
    onChange?: (e: any) => void;
    value?: string,
}

const Input = ({ label, placeholder, onChange, value }: prop) => {
    return (
        <label className={style.main__header__wrapper__input}>
            <span>{label}</span>
            <input onChange={onChange} type="text" placeholder={placeholder} value={value ? value : undefined} />
        </label>
    )
}
export default Input;