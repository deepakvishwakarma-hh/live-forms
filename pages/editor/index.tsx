
import Head from "next/head";
import { useEffect } from "react";
import * as Elements from "../../components/elements"
import useSave from "../../components/hooks/useSave";
import Security from "../../components/elements/auth-boundry";

const _Generator = () => {
    const save = useSave();
    useEffect(() => {
        save.saveSteps();
    })

    return (
        <Security>
            <Head>
                <meta name="viewport" content="width" />
            </Head>
            <Elements.FormGenerator />
        </Security>
    )
};
export default _Generator