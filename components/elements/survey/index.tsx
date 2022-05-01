
interface prop {
    Client: Client,
    Creator: {
        displayName: string,
        email: string,
    }
}
import Router from "next/router";
import { Client } from "../../typos";
import { Transformer } from "../index";
import { textResponsiveSizes } from "../../../styles/style";
import { Heading, Flex, Text, Center } from "@chakra-ui/react"

const Survey = ({ Client, Creator }: prop) => {

    const { title, subtitle } = Client.__header;
    const onLogoClickHandler = () => { Router.push('/') }

    return (
        <Flex
            h="100vh"
            px={[5, 10, 15, 20]}
            flexDir={["column", "column", "row", "row"]}>

            <Center
                flex={1}
                pr={10}
                pt={[5, 5, 0, 0]}
                pl={[3, 3, 5, 10]}
                alignItems={'start'}
                flexDir="column">

                <Flex alignItems={'center'} >

                    <Text maxW={'800px'} fontSize={textResponsiveSizes.sm} color="black" mr={2}>Powered by</Text>

                    <Flex cursor={'pointer'} onClick={onLogoClickHandler} border="2px whitesmoke solid" borderRadius={10} pr={3} alignItems={'center'} bg="whitesmoke">
                        <svg width="80" height="30" viewBox="0 0 100 50" >
                            <rect width="100" height="50" fill="white" />
                            <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
                            <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
                        </svg>
                        <Text fontWeight={500}>Liveforms</Text>
                    </Flex>
                </Flex>

                <Heading maxW={'500px'} py={5} fontWeight={700} fontSize={35} as="h1">{title} </Heading>
                <Text maxW={'800px'} fontSize={textResponsiveSizes.sm} color="grey">{subtitle}</Text>

            </Center >

            <Flex
                pt={5}
                flex={1}
                borderRadius={5}
                justifyContent={'center'}
                mt={[10, 10, 0, 0]}
                bg={["none", "none", "gray.100", "gray.100"]}
                overflowY={["initial", "initial", "scroll", "scroll"]}>
                <Transformer live>{Client}</Transformer>
            </Flex>
        </Flex >

    )
}
export default Survey


