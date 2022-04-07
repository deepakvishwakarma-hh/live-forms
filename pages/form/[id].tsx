import database from "../../firebase.config"
import { ref, onValue } from "firebase/database"
import { Transformer } from "../../components/elements";


import style from "../../styles/form.module.scss";

interface prop {
    Result: any, // need to make it 
    id: string;
}

const Page = ({ Result, id }: prop) => {

    const Meta = Result?.Client

    if (Result == null) {
        return <p>{id} not found!</p>
    }

    console.log(Meta)

    return (
        <div className={style.wrapper}>

            <header>
                <div>
                    <h1>{Meta.__header.title}</h1>
                    <p>{Meta.__header.subtitle}</p>
                </div>
            </header>
            <main>
                <Transformer live>{Meta}</Transformer>
            </main>

        </div>
    )
}

export default Page

export const getServerSideProps = async (context: any) => {

    const id = context.query.id;

    let Result = 'im not fetched'

    const T = onValue(ref(database, 'forms/' + id), (snapshot) => {
        Result = snapshot.val()
    });

    return {
        props: {
            id,
            Result
        }
    }
}