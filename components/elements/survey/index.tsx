
interface prop {
    Client: Client,
    Creator: {
        displayName: string,
        email: string,
    }
}
import { Client } from "../../typos";
import { Transformer } from "../index";
import { Heading, Flex, Text, Center } from "@chakra-ui/react"


const Survey = ({ Client, Creator }: prop) => {

    const { displayName, email } = Creator
    const { title, subtitle } = Client.__header;


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

                <Text maxW={'800px'} fontSize={15} color="purple">@{displayName}</Text>
                <Heading maxW={'500px'} py={5} fontWeight={700} fontSize={35} as="h1">{title} </Heading>
                <Text maxW={'800px'} fontSize={15} color="grey">{subtitle}</Text>

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


