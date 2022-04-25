import Transformer from "../../transformer";
import useGenerate from "../../../hooks/useGenerate";
import { Grid, Flex, Box, Button, Tooltip, Text } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch, toggleHeaderBox } from "../../../../state-store";

const Main = () => {
    const dispatch = useAppDispatch()
    const gen = useGenerate()
    const onProduce = () => {
        gen.store();
    }
    const META = useAppSelector(store => store.__generator.__meta);

    const onFormHeaderClick = () => {
        dispatch(toggleHeaderBox(true))
    }

    return (
        <Grid
            bg={'white'}
            bgSize="cover"
            gridTemplate={'80px auto /100%'}
            bgImage="url('/dashboard-bg.jpg')"
        >

            <Flex px={5} bg="white"
                alignItems={'center'} >

                <Flex alignItems={'center'} >

                    <Tooltip label=" survey heading">
                        <Button onClick={onFormHeaderClick} bg="none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                            </svg>
                        </Button>
                    </Tooltip>

                </Flex>

                <Text fontSize={13} ml={'auto'}>{META.__header.title}</Text>

                <Box marginLeft={'auto'}>
                    <Button _hover={{ opacity: .8 }} fontSize={13} letterSpacing={1} bg='black' color={'white'} p={'1rem 2rem'} fontWeight={400} onClick={onProduce} > Produce</Button>
                </Box>

            </Flex>

            <Flex
                h={'100%'}
                overflowY={'scroll'}
                justifyContent='center'>
                <Transformer>{META}</Transformer>
            </Flex>
        </Grid >

    )
}
export default Main