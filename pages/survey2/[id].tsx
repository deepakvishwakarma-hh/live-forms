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

    let res: any = 'default';
    const id = context.query.id;
    const starCountRef = ref(database, 'forms/' + id);
    onValue(starCountRef, (snapshot) => {
        res = snapshot.val()
    })

    if (res == null) {
        return {
            notfound: true
        }
    }

    return {
        props: {
            data: res
        }
    }
}