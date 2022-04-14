import Image from "next/image"
import { useRouter } from 'next/router';
import database from "../../firebase.config"
import { useState, useEffect } from 'react'
import style from "../../styles/form.module.scss";
import { ref, get, child } from "firebase/database";
import { Transformer } from "../../components/elements";

const Page = () => {

    const router = useRouter();
    const id = router.query.id;
    const [res, setRes] = useState<any>(false);

    useEffect(() => {
        const dbRef = ref(database);

        get(child(dbRef, 'forms/' + id))
            .then((snapshot) => {
                let storedData = snapshot.val();
                if (storedData) {
                    setRes(storedData);
                }
            }).catch((error) => {
                console.log(error);
            })

    }, [id])

    const ConstructionDetails = res?.Client;

    return (
        <div className={style.wrapper}>
            <header>
                <div>
                    <h5>Powerd by
                        <Image width={50} height={50} src="/logo.svg" alt="none" />
                    </h5>
                </div>
            </header>
            <main>
                {res && <Transformer live>{ConstructionDetails}</Transformer>}
            </main>
        </div>
    )
}

export default Page


