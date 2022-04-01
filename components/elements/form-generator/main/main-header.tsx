import Input from "./main-input";
import style from "../style.module.scss";

const Header = () => {
    return (
        <div className={style.main__header}>
            <h2>Header</h2> <sup>*required</sup>
            <div className={style.main__header__wrapper}>
                <Input label="This is heading text" placeholder="ex. Recruiting Junior Web Developer" />
                <Input label="This is heading paragraph" placeholder="ex. Recruiting Junior Web Developer" />
            </div>
        </div>
    )
}

export default Header;