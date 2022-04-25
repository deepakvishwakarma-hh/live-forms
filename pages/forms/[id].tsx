import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import database from "../../firebase.config"
import { Survey } from "../../components/elements";
import { Loader } from "../../components/elements";
import { ref, get, child } from "firebase/database";

// imported under relatview
import Fallback from "../../components/elements/survey/fallback";

const Page = () => {

    const router = useRouter();
    const id = router.query.id;
    const [res, setRes] = useState<any>(false);
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        // Database Reference
        const Reference = ref(database);
        // Find Survey on DB
        get(child(Reference, 'forms/' + id))
            .then((snapshot) => {
                let storedData = snapshot.val();
                //store if Finded
                if (storedData) {
                    setRes(storedData);
                    setLoading(false)
                } else {
                    setLoading(false)
                }
            }).catch((error) => {
                console.log(error);
            })
    }, [id])

    return (
        <>
            {isLoading && <Loader fullpage />}
            {res && <Survey Client={res.Client} />}
            {!res && <Fallback />}
        </>
    )
}

export default Page


