import Head from 'next/head';
import database from "../../firebase.config"
import { ref, onValue } from "firebase/database";
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

    let res: any = false;
    const id = context.query.id;
    const starCountRef = ref(database, 'forms/' + id);
    onValue(starCountRef, async (snapshot) => {
        res = await snapshot.val()
    })



    return {
        props: {
            data: res
        }
    }
}