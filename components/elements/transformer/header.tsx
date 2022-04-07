import style from "./style.module.scss";
interface prop {
    data: {
        title: string,
        subtitle: string
    },
    isLive?: boolean | undefined
}

const Header = ({ data }: prop) => {

    return (
        <div className={style.header} >
            <h2>{data.title}</h2>
            <p>{data.subtitle}</p>

        </div>
    )
}
export default Header;