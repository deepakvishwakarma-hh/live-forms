import Head from "next/head";
import { useEffect } from "react";
import useSave from "../../src/hooks/useAutoSave";
import { Boundry as Security, Editor } from "../../src/elements"

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