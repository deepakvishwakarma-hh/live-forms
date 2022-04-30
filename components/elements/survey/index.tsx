
import { Client } from "../../typos";
import { Transformer } from "../index";
import { Container, Heading, Flex, Text } from "@chakra-ui/react"

interface prop {
    Client: Client,
    Creator: {
        displayName: string,
        email: string,
    }
}

const Survey = ({ Client, Creator }: prop) => {

    const { displayName, email } = Creator
    const { title, subtitle } = Client.__header;

    return (
        <Container maxW="container.lg">

            <Flex py={5} flexDir="column">
                <Heading py={5} fontWeight={500} fontSize={25} as="h1" textAlign="center">{title}</Heading>
                <Text fontSize={15} color="grey" textAlign="center">{subtitle}</Text>

            </Flex>

            <Flex justifyContent={'center'} bg="gray.200" h={'300px'} borderRadius={5} pt={5}>
                < Transformer live>{Client}</Transformer>
            </Flex>

            <Flex ml="auto" flexDir={'column'} bg="whatsapp.200" p={5} pos="fixed" bottom={'2rem'} right={'2rem'}>
                <Text textTransform={'uppercase'} fontWeight={500} fontSize={13}> Publisher</Text>
                <Text fontWeight={500} fontSize={12} color="purple">{displayName}</Text>
                <Text fontWeight={500} fontSize={12} color="purple">{email}</Text>
            </Flex>

        </Container >

    )
}
export default Survey

// designing thissssss