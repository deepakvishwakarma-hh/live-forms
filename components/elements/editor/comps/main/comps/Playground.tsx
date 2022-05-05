import * as Chakra from "@chakra-ui/react"
import Transformer from "../../../../transformer"
import { useAppSelector } from "../../../../../../state-store"

const Playground = () => {

    const meta = useAppSelector(store => store.__generator.__meta)

    return (
        <Chakra.Grid bgImage="url('/dashboard-bg.jpg')" bgSize="cover" h="100%" >
            <Chakra.Flex overflowY={'scroll'} maxH="calc(100vh - 100px)" justifyContent='center'
                css={{
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