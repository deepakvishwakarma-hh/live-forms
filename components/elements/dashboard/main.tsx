import Form from "./forms";
import { useState } from "react";
import style from "./dashboard.module.scss";

const Main = ({ arr, data }: any) => {

    const [state, setState] = useState<'container' | 'live forms'>('container')

    const onClick = (e: any) => { setState(e.target.innerHTML) }

    return <div className={style.main}>
        <div className={style.header}>
            <button onClick={onClick} style={{ borderBottomColor: state == 'container' ? 'black' : 'transparent' }}>container</button>
            <button onClick={onClick} style={{ borderBottomColor: state !== 'container' ? 'black' : 'transparent' }}>live forms</button>
        </div>

        {state == 'container' && <Container arr={arr} data={data} />}

    </div>
}

export default Main;

// Container Component

const Container = ({ data, arr }: any) => {

    const maps = arr.map((item: string, index: number) => <Form data={data[item]} key={index} />)

    return <div className={style.container}>
        {maps}
    </div>
}
export { Container }





