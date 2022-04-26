// Everyting Flex 

import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import database from "../../firebase.config";
import { ref, onValue, } from "firebase/database";
import { Loader } from "../../components/elements";
import { Boundry } from "../../components/elements";
import { Analyser } from "../../components/elements";
import { Flex, Container, Text } from "@chakra-ui/react";

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

    const { title } = res && res?.Client.__header; // need to OPTs

    return (
        <Boundry>
            {isLoading && <Loader fullpage />}

            <Container maxW={'container.lg'} >

                <Flex flexDir={'column'} p={5} >

                    <Flex alignItems={'center'}>
                        <svg width="70" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="100" fill="transparent" />
                            <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
                            <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
                        </svg>
                        <Text fontWeight={500} textTransform={'uppercase'} ml={2} letterSpacing={2}>/ Analyser / {title}</Text>
                    </Flex>
                </Flex>

                <Analyser DB={res?.Database} />

            </Container>

        </Boundry>
    )
}

