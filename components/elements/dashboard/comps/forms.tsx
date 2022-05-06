interface prop { data: any }

import Router from 'next/router'
import * as Chakra from "@chakra-ui/react"
import { RWebShare } from "react-web-share";

const Form = ({ data }: prop) => {

    const id = data.id;

    const { title } = data.Client.__header;

    const response = data?.Database?.length ?? "0";

    const onAnalyseHandler = () => { Router.push('/dashboard/' + id) }

    const conditionallyIndicatiorColor = (response == 0) ? "red" : "green";

    const webShareApiPayload = {
        text: "Liveforms - " + title,
        url: "https://liveforms.vercel.app/survey/" + id,
        title: "LiveForms Survey link"
    }
    const splicedName = title[20] ? title?.slice(0, 20) + '...' : title;

    return (

        <Chakra.Flex flexBasis={1} bg="white" p={2} py={5} maxWidth="400px" minWidth="400px" borderRadius={2} m={2} boxShadow="sm" alignItems="center" >

            <Chakra.Center px={2} mr={2} borderRadius={5}>
                <Chakra.Text color={conditionallyIndicatiorColor} fontWeight={500} fontSize={20}>●</Chakra.Text>
            </Chakra.Center >

            <Chakra.Flex flex={1} >
                <Chakra.Text fontWeight={500} fontSize={15} color="gray.900">{splicedName}</Chakra.Text>
            </Chakra.Flex >

            <Chakra.Flex flex={1} justifyContent="center"  >
                <Chakra.Button onClick={onAnalyseHandler} bg="white" p={3} fontWeight={400} size="xs" mx={1} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07Z" />
                    </svg>
                </Chakra.Button>

                <RWebShare
                    data={webShareApiPayload}>
                    <Chakra.Button bg="white" p={3} fontWeight={400} size="xs" mx={1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                        </svg>
                    </Chakra.Button>
                </RWebShare>

            </Chakra.Flex>

        </Chakra.Flex >
    )
};

export default Form;