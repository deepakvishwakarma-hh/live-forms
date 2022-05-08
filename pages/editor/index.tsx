import Head from "next/head";
import { useEffect } from "react";
import { Editor } from "../../components/elements";
import useSave from "../../components/hooks/useSave";
import Security from "../../components/elements/auth-boundry";

const Index = () => {

    const save = useSave();
    useEffect(() => {
        save.saveSteps();
    })

    return (
        <Security>
            <Head>
                <title>Liveforms - Editor</title>
                <meta name="viewport" content="width" />
                <meta name="description" content="free form generator by liveforms" />
            </Head>
            <Editor />
        </Security>
    )
};
export default Index