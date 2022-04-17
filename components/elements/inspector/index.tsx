import Element from "./element";
import { Grid, Box } from "@chakra-ui/react";
import { useAppSelector } from "../../../state-store";

const Inspector = () => {
    const inputBlocks = useAppSelector(store => store.__generator.__meta.__custom)
    const inputRefList = inputBlocks.map((Ele: any, Index: number) => <Element
        key={Index} index={Index} data={Ele} />)
    return (
        <Grid gridTemplate={'80px auto / 100%'} bg='white'>
            <Box></Box>
            <Box padding={'1rem'} overflow="scroll" >
                {inputRefList}
            </Box>
        </Grid >
    )
}

export default Inspector