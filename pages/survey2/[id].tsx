import Head from 'next/head';
import database from "../../firebase.config"
import { ref, get, child } from "firebase/database";

import { Survey } from "../../components/elements";

export default function SurveyPage({ data }: any) {

    return (
        <>
            <div>{
                JSON.stringify(data)}</div>
        </>
    )
}

export async function getServerSideProps(context: any) {
    const id = context.query.id;
    const Reference = ref(database);
    const snapshot = await get(child(Reference, 'forms/' + id));
    const data = await snapshot.val();
    return {
        props: {
            data
        }
    }
}