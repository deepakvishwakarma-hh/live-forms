import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import database from "../../firebase.config";
import { Boundry } from "../../components/elements";
import { ref, onValue, } from "firebase/database";
import style from "../../styles/dashboard.module.scss"
import { Loader } from "../../components/elements";


export default function Index() {

    const router = useRouter();
    const id = router.query.id;
    const [res, setRes] = useState<any>(false);
    const [isLoading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        onValue(ref(database, 'forms/' + id), (snapshot) => {
            let res = snapshot.val()
            if (res) {
                setRes(res)
                setLoading(false)
            } else {
                setLoading(false)
            }
        });

    }, [id])



    const map = res?.Database?.map((value: any, index: number) => {

        const Keys = Object.keys(value);

        const Child = Keys?.map((key: any, index: number) => {

            return (
                <div key={index} className={style.child}>
                    <h5> &quot; {key} &quot; : </h5>
                    <p>&quot;{value[key]} &quot;</p>
                </div>
            )
        });

        return <div className={style.ele} key={index}>
            {Child}
        </div>
    })

    return (
        <Boundry>
            {isLoading && <Loader />}
            <div className={style.wrapper}>
                <div className={style.content}>{map}</div>
            </div>
        </Boundry>
    )
}

