import database from "../../firebase.config"
import { ref, onValue } from "firebase/database"
import style from "../../styles/form.module.scss";
import { Transformer } from "../../components/elements";
import Image from "next/image"
interface prop {
    Result: any, // need to make it 
    id: string;
}

const Page = ({ Result, id }: prop) => {

    const Meta = Result?.Client;

    if (!Result) {
        return <p>{id} not found!</p>
    }

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
                {/* <Transformer live>{Meta}</Transformer> */}
            </main>

        </div>
    )
}

export default Page

export const getServerSideProps = async (context: any) => {

    const id = context.query.id;
    let Result = 'im not fetched'
    const target = ref(database, 'forms/' + id);
    onValue(target, (snapshot) => {
        Result = snapshot.val()
    });

    return {
        props: {
            id,
            Result
        }
    }
}