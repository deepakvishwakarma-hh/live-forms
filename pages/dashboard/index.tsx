// 01

import Head from "next/head";
import { useEffect, useState } from "react";
import database from "../../firebase.config";
import { ref, onValue } from "firebase/database";
import { Boundry } from "../../components/elements";
import * as Element from "../../components/elements";
import {
    setUser,
    useAppSelector,
    useAppDispatch,
} from "../../state-store";

const Dashboard = ({ Result }: any) => {

    const [response, setResponse] = useState<any>(false)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setUser())

        onValue(ref(database, 'forms/'), (snapshot) => {
            let res = snapshot.val()
            if (res) {
                setResponse(res)
            }
        });

    }, [dispatch])

    const Keys = Object.keys(response);

    const user = useAppSelector(state => state.user);

    const arr = Keys.filter((key: string) => (response[key]?.Creator?.email == user?.email))

    return (
        <Boundry>
            <Head>
                <meta name="viewport" content="width" />
            </Head>
            <Element.Dashboard arr={arr} data={response} />
        </Boundry>
    )
}


export default Dashboard

export const getServerSideProps = async () => {

    let Result = 'im not fetched'
    onValue(ref(database, 'forms/'), (snapshot) => {
        Result = snapshot.val()
    });

    return {
        props: {
            Result
        }
    }
}