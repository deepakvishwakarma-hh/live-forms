import Image from "next/image"
import useRouter from 'next/router';
import database from "../../firebase.config"
import { ref, onValue } from "firebase/database"
import style from "../../styles/form.module.scss";
import { Transformer } from "../../components/elements";

import { useState, useEffect } from 'react'

interface prop {
    Result: any, // need to make it 
    id: string;
}

const Page = ({ Result, id }: prop) => {

    const [response, setResponse] = useState<any>(false);

    useEffect(() => {

        onValue(ref(database, 'forms/'), (snapshot) => {
            let res = snapshot.val();
            if (res) { setResponse(res) }
        });

    }, [])

    console.log(response)

    const Meta = Result?.Client;
    if (!Result) { return <p>{id} not found!</p> }

    return (
        <div className={style.wrapper}>
            <header>
                <div>
                    <h5>Powerd by
                        <Image width={50} height={50} src="/logo.svg" alt="none" />
                    </h5>
                    <h1>{Meta?.__header?.title}</h1>
                    <p>{Meta?.__header?.subtitle}</p>
                </div>
            </header>
            <main>
                {JSON.stringify(Meta)}
            </main>
        </div>
    )
}

export default Page

export const getServerSideProps = async (context: any) => {

    const id = context.query.id;
    let Result = 'im not fetched';
    const T = onValue(ref(database, 'forms/' + id), (snapshot) => {
        Result = snapshot.val();
    });

    return {
        props: {
            id,
            Result
        }
    }
}
