

import Header from "./header"
import style from "./style.module.scss";
import Constructor from "./constructor"
import { useState } from "react";
import { useAppSelector } from "../../../state-store"
import useGenerate from "../../hooks/useGenerate"
import { useRouter } from "next/router"

interface prop {
    children: any,
    live?: boolean,
}

const Transformer = ({ children, live }: prop) => {

    const gen = useGenerate()

    const router = useRouter()

    const [gatherdInformation, setGatherdInformation] = useState<any>({})

    const map = children.__custom.map((value: any, key: number) => <Constructor value={value} key={key} index={key} />)

    const header = useAppSelector(store => store.__generator.__meta.__header)

    const parentProperties = {
        className: `${style.form} ${!live ? style.special : ''}`,
        onChange: (E: any) => {
            const { name, value } = E.target;
            setGatherdInformation({ ...gatherdInformation, [name]: value })
        }
    }

    const headerCompProperties = {
        data: live ? children.__header : header,
        isLive: live
    }

    const onSubmit = (E: any) => {
        E.preventDefault();

        gen.saveToDatabase(router.query.id as string, gatherdInformation)
    }

    return (
        <div {...parentProperties}>
            <Header  {...headerCompProperties} />
            <form onSubmit={onSubmit}>
                {map}
                {live ? <button className={style.submit__button} type="submit">post</button> : null}
            </form>
        </div>
    )

}
export default Transformer


