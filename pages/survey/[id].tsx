import Head from 'next/head';
import database from "../../firebase.config"
import { Survey } from "../../src/comps";
import { ref, get, child } from "firebase/database";

export default function SurveyPage({ data }: any) {

    const { Client, Creator } = data;
    const payload = { Client, Creator }
    const { title, subtitle } = Client.__header;

    return (
        <>
            <Head>
                <title>{title} ~ liveforms</title>
                <meta name="description" content={subtitle} />
            </Head>
            <Survey {...payload} />
        </>
    )
}

export async function getServerSideProps(context: any) {

    const { res } = context;
    // store as cache;
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    const id = context.query.id;
    const Reference = ref(database);
    const snapshot = await get(child(Reference, 'forms/' + id));
    const data = await snapshot.val();

    if (data == null) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data
        }
    }
}