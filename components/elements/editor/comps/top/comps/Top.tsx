import Router from "next/router";
import * as Chakra from "@chakra-ui/react"
import useGenerate from "../../../../../hooks/useGenerate";
import { useAppSelector } from "../../../../../../state-store"
import useProduce from "../../../../../hooks/useProduce";
const Top = () => {
    const generate = useGenerate();

    const experimenatal = useProduce()


    const { title } = useAppSelector(store => store.__generator.__meta.__header);
    const onBackButtonClickHandler = () => { Router.push('/dashboard') };
    // const onProduceButtonHandler = () => { generate.store() };

    const onProduceButtonHandler = () => { experimenatal.Produce() };


    return (
        <Chakra.Grid bg="black" gridTemplate={"100% / auto auto"}>

            <Chakra.Flex px={5} alignItems={'center'}>

                <Chakra.Box onClick={onBackButtonClickHandler}>
                    <svg width="20" height="20" fill="white" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </Chakra.Box>

                <Chakra.Text fontSize={'.9rem'} ml={5} color="white">{title}</Chakra.Text>

            </Chakra.Flex>

            <Chakra.Flex px={2} alignItems={'center'} justifyContent={"end"}  >

                <Chakra.Center fontSize={'.9rem'} onClick={onProduceButtonHandler} letterSpacing={.5} bg="#0070f3" borderRadius={5}
                    py={1} px={5} color="white">Produce</Chakra.Center>

            </Chakra.Flex>
        </Chakra.Grid>
    )
}
export default Top 