import Top from "./top";
import Elememt from "./element";
import Loader from "../../../loader";
import type { prop } from "../../index"
import * as  Chakra from "@chakra-ui/react";

const Main = ({ userCreatedSurveyIds, response }: prop) => {

    const maps = userCreatedSurveyIds.map((item: string, index: number) => <Elememt data={response[item]} key={index} />)

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

    const Main = <Chakra.Flex flexDir={'column'} bg="#EFEFEF" bgSize="cover">
        <Chakra.Flex h="100%" borderRadius={'1rem 0 0 0 '} p={5} bg="#D7D7D7" border="2px white solid" flexDir={'column'} maxH={"100%"} overflowY={'scroll'} css={scrollbarStyle}> {maps} </Chakra.Flex> </Chakra.Flex>

    const conditionallyRender = response ? Main : <Loader />;

    return (
        <Chakra.Grid gridTemplate={" 100px calc(100% - 100px) / 100%"}>
            <Top />

            {conditionallyRender}

        </Chakra.Grid >
    )
}
export default Main;

// const isDataNotFound = data == 'data-not-found';


