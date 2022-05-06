import * as Chakra from "@chakra-ui/react"
import Inspector from "../../../../../inspector"

const AsideRight = () => {

    return (
        <Chakra.Grid gridTemplate={'100px auto/ 100%'} bgImage={'/editor.avif'} bgSize="cover" >

            <Chakra.Flex px={6} alignItems={'center'} fontSize={".9rem"}>
                <Chakra.Text flex={1} fontWeight={500}>Inspection Bar</Chakra.Text>
                <Chakra.Box mr={1} flex={.1} bg="gray.200" width={'100%'} h={'5px'} borderRadius={'5px'}></Chakra.Box>
                <Chakra.Box flex={.5} bg="gray.500" width={'10%'} h={'2px'}></Chakra.Box>
            </Chakra.Flex>

            <Inspector />

        </Chakra.Grid>
    )
}
export default AsideRight