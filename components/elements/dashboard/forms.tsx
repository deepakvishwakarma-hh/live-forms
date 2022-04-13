interface prop { data: any }

import Router from 'next/router'
import { Remove } from "../buttons"
import style from "./dashboard.module.scss"

const Form = ({ data }: prop) => {

    const id = data.id;
    const title = data.Client.__header.title;
    const response = data?.Database?.length ?? "0";
    const onDelete = () => { alert('deleted') }
    const onClick = () => { Router.push('/dashboard/' + id) }

    return (
        <div
            className={style.form}
            onClick={onClick}>

            <div className={style.top}>
            </div>

            <div className={style.bottom}>
                <h3>{title}</h3>

                <p>{response} res</p>
                <Remove
                    aspect={30}
                    color="black"
                    onClick={onDelete}
                />
            </div>
        </div>
    )
};

export default Form;