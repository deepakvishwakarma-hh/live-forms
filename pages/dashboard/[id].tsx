import React from 'react'
import database from "../../firebase.config";
import { ref, onValue } from "firebase/database";
import { Boundry } from "../../components/elements";
import style from "../../styles/dashboard.module.scss"

interface prop { data: any }

export default function Foroms({ data }: prop) {


    const map = data?.Database?.map((value: any, index: number) => {

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
            <div className={style.wrapper}>
                <div className={style.content}>{map}</div>

            </div>
        </Boundry>
    )
}


export const getServerSideProps = async (context: any) => {

    const id = context.query.id;

    let Result = 'im not fetched'

    const T = onValue(ref(database, 'forms/' + id), (snapshot) => {
        Result = snapshot.val()
    });

    return {
        props: {
            data: Result
        }
    }
}