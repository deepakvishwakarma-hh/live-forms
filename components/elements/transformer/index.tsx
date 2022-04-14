// Conversion Into Into human Readable Formet

import Header from "./header"
import { useState } from "react";
import { useRouter } from "next/router"
import Constructor from "./constructor"
import style from "./style.module.scss";
import useGenerate from "../../hooks/useGenerate"
import { useAppSelector } from "../../../state-store"

interface prop {
    children: any,
    live?: boolean,
}

const Transformer = ({ children, live }: prop) => {

    // Read Client /  Create Blank Object for initialState
    const CreateBlankObject = () => {
        const T: any = {};
        children?.__custom?.map((V: any) => {
            (V.action !== 'dropdown')
                ? T[V.name] = ''
                : T[V.name] = V.options[0] // B'cause state cannot store defult (first value)
        })

        return T;
    }

    const gen = useGenerate()

    const router = useRouter()

    const [gatherdInformation, setGatherdInformation] = useState<any>(CreateBlankObject())

    // maps of constructed form element
    const map = children.__custom.map((V: any, K: number) => <Constructor value={V} key={K} />)

    const header = useAppSelector(store => store.__generator.__meta.__header)

    const parentProperties = {

        // change according to the editor | live
        className: `${style.form} ${!live && style.special}`,

        // change handler
        onChange: (e: any) => {
            const { name, value } = e.target;
            setGatherdInformation({ ...gatherdInformation, [name]: value })
        }
    }

    const headerCompProperties = {
        data: live ? children.__header : header, // change according to the editor | live
        isLive: live
    }

    const onSubmit = (E: any) => {
        E.preventDefault();

        gen.saveToDatabase(router.query.id as string, gatherdInformation)
    }

    return (
        <div {...parentProperties}>
            {!live && <Header  {...headerCompProperties} />}
            <form onSubmit={onSubmit}>
                {map}
                {live ? <button className={style.submit__button} type="submit">post</button> : null}
            </form>
        </div>
    )

}
export default Transformer


