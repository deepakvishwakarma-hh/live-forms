import * as Chakra from "@chakra-ui/react"
import Transformer from "../../../../../transformer"
import { useAppSelector } from "../../../../../../../state-store"
import Top from "./Top"

const Playground = () => {
    const meta = useAppSelector(store => store.__generator.__meta)

    return (
        <Chakra.Grid h="100%" bg="#EFEFEF" gridTemplate={"100px auto / 100%"} >

            <Top />


            <Chakra.Flex overflowY={'scroll'} bg="#D7D7D7" borderRadius={' 2rem 2rem 0rem 0rem'} border="2px white solid" maxH="calc(100vh - 100px)" justifyContent='center' css={{
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'gray',
                    borderRadius: '24px',
                },
            }}>
                <Transformer>{meta}</Transformer>
            </Chakra.Flex>
        </Chakra.Grid >
    )
}
export default Playground