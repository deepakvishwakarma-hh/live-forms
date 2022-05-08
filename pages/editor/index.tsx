import Head from "next/head";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import useSave from "../../components/hooks/useSave";
import Security from "../../components/elements/auth-boundry";

// performance optimization testing...
const DynamicImportedEditor = dynamic(
    () => import('../../components/elements/editor'),
    { loading: () => <p>.</p> }
)

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
            <DynamicImportedEditor />
        </Security>
    )
};
export default Index