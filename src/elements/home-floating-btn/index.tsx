
import { Center } from "@chakra-ui/react"
import Router from "next/router";
import { useWindowScrollPositions } from "../../hooks/useWindowPositions";

const Index = () => {

    const { scrollY, height } = useWindowScrollPositions()

    const upPath = "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
    const downPath = "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z";

    const helfHeightOfPage = height / 2;
    const conditionallyRender = (scrollY < helfHeightOfPage) ? downPath : upPath;
    const conditionallyToScroll = (scrollY < helfHeightOfPage) ? "/#footer" : "/#header";



    return (

        <Center

            width={50}
            height={50}
            bg={'black'}
            color="white"
            right={"2rem"}
            bottom={"2rem"}
            position={'fixed'}
            borderRadius={'50%'}
            onClick={() => { Router.push(conditionallyToScroll) }}>

            <svg width="16" height="16" fill="white" viewBox="0 0 16 16">
                <path fillRule="evenodd" d={conditionallyRender} />
            </svg>

        </Center>
    )
}
export default Index
