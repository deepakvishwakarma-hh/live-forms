import Head from 'next/head';
import database from "../../firebase.config"
import { Survey } from "../../components/elements";
import { ref, get, onValue } from "firebase/database";
import Fallback from "../../components/elements/survey/fallback";

export default function SurveyPage({ data }: any) {

    // if (!data) {
    //     return <Fallback />
    // }

    const { Client, Creator, } = data;
    const pageTitle = Client.__header.title;
    const pageDiscription = Client.__header.discription;

    return (
        <>
            <Head>
                <title>{pageTitle} ~ by liveforms</title>
                <meta name="description" content={pageDiscription} />
            </Head>
            <Survey Client={Client} Creator={Creator} />
        </>
    )
}

export async function getServerSideProps(context: any) {

    const id = context.query.id;
    let res: any = false;
    const starCountRef = ref(database, 'forms/' + id);
    onValue(starCountRef, (snapshot) => {
        res = snapshot.val()
    })
    return {
        props: {
            data: res
        }
    }
}