import Element from "./element";
import { Grid, Box } from "@chakra-ui/react";
import { useAppSelector } from "../../../../../../../../state-store";
const Inspector = () => {

    const inputBlocks = useAppSelector(store => store.__generator.__meta.__custom)
    const inputRefList = inputBlocks.map((Ele: any, Index: number) => <Element
        key={Index} index={Index} data={Ele} />)

    return (
        <Grid >
            <Box maxH={'calc(100vh - 100px)'} overflowY="scroll" px={5} css={{

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
            }} >
                {inputRefList}
            </Box>
        </Grid >
    )
}

export default Inspector