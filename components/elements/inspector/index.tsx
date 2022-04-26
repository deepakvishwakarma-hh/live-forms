import Element from "./element";
import { Grid, Box, Text, Center } from "@chakra-ui/react";
import { useAppSelector } from "../../../state-store";
import Fallback from "./fallback-alert";

const Inspector = () => {
    const inputBlocks = useAppSelector(store => store.__generator.__meta.__custom)
    const inputRefList = inputBlocks.map((Ele: any, Index: number) => <Element
        key={Index} index={Index} data={Ele} />)

    const conditionallyRenderListOrFallback = (inputRefList.length == 0) ? <Fallback /> : inputRefList;
    return (
        <Grid gridTemplate={'80px auto / 100%'} bg='white'>
            <Center>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4z" />
                </svg>
                <Text pl={2} textAlign={'center'} fontWeight={700} textTransform="uppercase" >Inspector</Text>
            </Center>
            <Box padding={'1rem'} overflow="scroll" >
                {conditionallyRenderListOrFallback}
            </Box>
        </Grid >
    )
}

export default Inspector