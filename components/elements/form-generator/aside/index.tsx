import style from "../style.module.scss";
import Logo from "../../../micros/Logo";

const Aside = () => {

    const MultiFunctionalClickHandler = (E: any) => {
        console.log(E.target.name);
    }

    return (
        <div className={style.aside}>
            <Logo />
            <div className={style.aside__button__wrapper}>
                <button name="input" onClick={MultiFunctionalClickHandler}>Input Box</button>
                <button name="dropdown" onClick={MultiFunctionalClickHandler}>Dropdown Box</button>
                <button name="textarea" onClick={MultiFunctionalClickHandler}>Textarea Box</button>
            </div>
        </div>
    )
}
export default Aside
