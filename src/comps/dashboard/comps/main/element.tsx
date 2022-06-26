/* eslint-disable react-hooks/exhaustive-deps */
interface prop { data: any }
import Router from 'next/router'
import * as Chakra from "@chakra-ui/react"
import { useMemo } from 'react'
import { RWebShare } from "react-web-share";

const Form = ({ data }: prop) => {

    const id = data.id;
    const { title, subtitle } = data.Client.__header;
    const response = data?.Database?.length ?? "0";
    const onAnalyseHandler = () => { Router.push('/dashboard/' + id) }
    const onOpenInNewTabHandler = () => {
        if (window !== undefined) {
            window.open(
                "https://liveforms.vercel.app/survey/" + id, "_blank");
        }
    }

    const webShareApiPayload = {
        text: "Liveforms - " + title,
        url: "https://liveforms.vercel.app/survey/" + id,
        title: "LiveForms Survey link"
    }

    const getAllInputName = () => {
        let arr: string[] = [];
        data.Client.__custom.map((obj: any) => {
            arr.push(obj.name);
        })
        return arr;
    }

    const allInputName = useMemo(() => getAllInputName(), [data]);

    const allInputNameJSX = allInputName.map((item: string, index: number) => <Chakra.Text fontWeight={500} fontSize="12" color="black" px={3} py={1} borderRadius={5} mr={2} textTransform={"lowercase"}
        key={index}> ¬ {item}</Chakra.Text>)

    return (
        <>

            <Chakra.Flex bg="white  " mx={'2rem'} px={"2rem"} py={5} my={2} borderRadius={5}>
                < Chakra.Flex flex={1} flexDir="column" >
                    <Chakra.Text fontWeight={600}>{title}</Chakra.Text>
                    <Chakra.Text fontSize={12} color="gray">{subtitle}</Chakra.Text>
                    {(response == 0)
                        ? <Chakra.Text flex={.1} fontWeight={500} fontSize="12" py={1} borderRadius={5} color="red.500"> ⌀ Surveys Unavailable </Chakra.Text>
                        : <Chakra.Text flex={.1} fontWeight={500} fontSize="12" py={1} borderRadius={5} color="green.500"> ⌀ Surveys {response} </Chakra.Text>}
                </Chakra.Flex >

                <Chakra.Flex flex={1} pb={2} alignItems="center" >
                    <Chakra.Text>🗝️  </Chakra.Text>
                    <Chakra.Flex alignItems="center">{allInputNameJSX}</Chakra.Flex>
                </Chakra.Flex>

                <Chakra.Flex flex={1} justifyContent="flex-end" alignItems={'center'}>
                    <Chakra.Button name="analyser-button" onClick={onAnalyseHandler} bg="none" p={3} fontWeight={400} size="xs" mx={1} isDisabled={(response == 0)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07Z" />
                        </svg>
                    </Chakra.Button>
                    <RWebShare
                        data={webShareApiPayload}>
                        <Chakra.Button name="webshare-button" bg="none" p={3} fontWeight={400} size="xs" mx={1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                            </svg>
                        </Chakra.Button>
                    </RWebShare>
                    <Chakra.Button name="openinnewtab-button" onClick={onOpenInNewTabHandler} bg="none" p={3} fontWeight={400} size="xs" mx={1} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                        </svg>
                    </Chakra.Button>
                </Chakra.Flex>
            </Chakra.Flex >
        </>



    )
};

export default Form;