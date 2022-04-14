
import { Client } from "../../typos";
import style from "./survey.module.scss";
import { Transformer } from "../index";

interface prop {
    Client: Client
}

const Survey = ({ Client }: prop) => {

    const { __header } = Client;

    const { title, subtitle } = __header;

    return (
        <div className={style.wrapper}>
            <section className={style.header}>
                <div className={style.header__content}>

                    <h1>{title}</h1>
                    <p>{subtitle}</p>

                </div>
            </section>
            <section className={style.body}>
                <Transformer live>{Client}</Transformer>
            </section>
        </div>
    )
}
export default Survey