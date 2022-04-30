import Head from 'next/head';
import database from "../../firebase.config"
import { ref, onValue } from "firebase/database";
import { Survey } from "../../components/elements";

export default function SurveyPage({ data }: any) {

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

    let res: any = false;
    const id = context.query.id;
    const starCountRef = ref(database, 'forms/' + id);
    onValue(starCountRef, async (snapshot) => {
        res = await snapshot.val()
    })

    if (!res) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data: res
        }
    }
}