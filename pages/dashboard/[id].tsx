import Router from "next/router";
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import database from "../../firebase.config";
import { ref, onValue, } from "firebase/database";
import { Loader, Boundry, Analyser } from "../../src/comps";
import { Flex, Container, Text, Button } from "@chakra-ui/react";

export default function Index() {

    const router = useRouter();
    const id = router.query.id;
    const [res, setRes] = useState<any>(false);
    const [isLoading, setLoading] = useState<boolean>(true)
    const onVisit = () => { Router.push(`/survey/${id}`) }

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

                <Flex p={5} alignItems="center">

                    <Flex alignItems={'center'}>
                        <svg width="70" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100" height="100" fill="transparent" />
                            <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
                            <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
                        </svg>
                        <Text fontWeight={500} textTransform={'uppercase'} ml={2} letterSpacing={2}>/ Analyser / {title}</Text>
                    </Flex>

                    <Button onClick={onVisit} _hover={{ opacity: .8 }} ml="auto" bg="#0070FE" color="white" fontWeight={500} fontSize={12} px={10}>
                        <Text mr={2}>Visit Survey Page</Text>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></Button>

                </Flex>

                <Analyser DB={res?.Database} />

            </Container>

        </Boundry>
    )
}

