import Head from "next/head";
import { useEffect } from "react";
import { Editor } from "../../components/elements";
import useSave from "../../components/hooks/useAutoSave";
import Security from "../../components/elements/auth-boundry";

const Index = () => {

    const autoSave = useSave();

    useEffect(() => {
        autoSave.saveSteps();
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