import {
    setUser,
    useAppSelector,
    useAppDispatch,
} from "../../store";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import database from "../../firebase.config";
import { ref, onValue } from "firebase/database";
import { Boundry } from "../../src/comps";

// performance optimization testing...
const DynamicImportedMain = dynamic(
    () => import('../../src/comps/dashboard'),
    { loading: () => <p>.</p> }
)

const Dashboard = () => {

    const dispatch = useAppDispatch();
    const [response, setResponse] = useState<any>(false)

    useEffect(() => {
        // extract user and store in state
        dispatch(setUser())
        // get all survey
        onValue(ref(database, 'forms/'), (snapshot) => {

            let res = snapshot.val()
            if (res) {
                setResponse(res);
            } else {
                setResponse('data-not-found')
            }
        });

    }, [dispatch])

    const Keys = Object.keys(response);
    const user = useAppSelector(state => state.user);
    const userCreatedSurveyIds = Keys.filter((key: string) => (response[key]?.Creator?.email == user?.email))
    const dashboardPayload = { userCreatedSurveyIds, response }

    return (
        <Boundry>
            <Head>
                <title>Liveforms ~ Dashboard</title>
                <meta name="viewport" content="width" />
                <meta name="description" content="Liveforms Dashboard" />
            </Head>
            <DynamicImportedMain {...dashboardPayload} />
        </Boundry>
    )
}


export default Dashboard

