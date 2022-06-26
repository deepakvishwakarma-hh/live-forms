import Image from "next/image";
import Elememt from "./element";
import type { prop } from "../../index"
import * as  Chakra from "@chakra-ui/react";
import { useAppSelector } from "../../../../../store";
import useDashboard from "../../../../hooks/useDashboard";

const getTotalOfSurveys = (res: any) => {
    let surveyCount = 0;
    const keys = Object.keys(res);
    keys.map((item: any) => {
        if (res[item].Database !== undefined) {
            surveyCount += res[item].Database.length
        }
    })
    return surveyCount
}

const Main = ({ userCreatedSurveyIds, response }: prop) => {

    const dashboard = useDashboard()

    const { photoURL, displayName, email } = useAppSelector(store => store.user)

    const maps = userCreatedSurveyIds.map((item: string, index: number) => <Elememt data={response[item]} key={index} />)

    const totalSurveyCount = getTotalOfSurveys(response);

    const scrollbarStyle = {
        '&::-webkit-scrollbar': {
            width: '2px',
        },
        '&::-webkit-scrollbar-track': {
            width: '20px',
        },
        '&::-webkit-scrollbar-thumb': {
            background: 'gray',
            borderRadius: '24px',
        },
    }

    const Skeleton = <Chakra.Stack mx={'2rem'}>
        <Chakra.Skeleton height='120px' startColor='whitesmoke' endColor='blackAlpha.300' fadeDuration={1} />
        <Chakra.Skeleton height='120px' startColor='whitesmoke' endColor='blackAlpha.300' fadeDuration={1} />
        <Chakra.Skeleton height='120px' startColor='whitesmoke' endColor='blackAlpha.300' fadeDuration={1} />
        <Chakra.Skeleton height='120px' startColor='whitesmoke' endColor='blackAlpha.300' fadeDuration={1} />
        <Chakra.Skeleton height='120px' startColor='whitesmoke' endColor='blackAlpha.300' fadeDuration={1} />
        <Chakra.Skeleton height='120px' startColor='whitesmoke' endColor='blackAlpha.300' fadeDuration={1} />
        <Chakra.Skeleton height='120px' startColor='whitesmoke' endColor='blackAlpha.300' fadeDuration={1} />
        <Chakra.Skeleton height='120px' startColor='whitesmoke' endColor='blackAlpha.300' fadeDuration={1} />
    </Chakra.Stack>

    return (
        <Chakra.Grid gridTemplate={"200px calc(100% - 200px) / 100%"}>
            <Chakra.Flex bg="white">
                <Chakra.Center flex={1}>
                    <Chakra.Text lineHeight={1.1} fontSize={15} pl={2}>Y&apos;ve collected <Chakra.Text px={2} display={'inline'} fontSize={50} fontFamily="monospace !important" fontWeight={800}>{totalSurveyCount}</Chakra.Text> surveys.</Chakra.Text>
                </Chakra.Center>
                <Chakra.Center flex={1}>
                    <Chakra.Flex>
                        <Chakra.Flex flex={1} borderRadius={"50%"} overflow="hidden" pos="relative" w="4rem" h="4rem">
                            {photoURL && <Image src={photoURL as string} layout="fill" alt="profile" />}
                        </Chakra.Flex>
                        <Chakra.Center pl={3} alignItems={'start'} flex={1} flexDir={'column'} >
                            <Chakra.Text fontWeight={600}>{displayName}</Chakra.Text>
                            <Chakra.Text fontSize={12} color="gray">{email}</Chakra.Text>
                        </Chakra.Center>
                        <Chakra.Center ml={5}>
                            <Chakra.Button onClick={() => { dashboard.logout() }} bg="gray.50" w="100%" name="logout-button" display={'flex'} justifyContent={'space-evenly'} px={5} borderRadius={4} alignItems="center" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>
                                <Chakra.Text ml={2} fontSize={12}>Log out</Chakra.Text>
                            </Chakra.Button>
                        </Chakra.Center>
                    </Chakra.Flex>
                </Chakra.Center>
            </Chakra.Flex >
            <Chakra.Flex h="100%" bg="whitesmoke" p={5} flexDir={'column'} maxH={"100%"} overflowY={'scroll'} css={scrollbarStyle}> {response ? maps : Skeleton} </Chakra.Flex>
        </Chakra.Grid >
    )
}
export default Main;



