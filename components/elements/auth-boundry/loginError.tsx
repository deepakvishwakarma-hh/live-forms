import useAuth from "../../hooks/useAuth";
import { Flex, Center, Heading, Text, Button } from "@chakra-ui/react";

const Aleart = () => {

    const Auth = useAuth();

    const onLogin = () => {
        Auth.googleAuth()
    }

    return (
        <Center
            pos="fixed"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="whiteAlpha.300">

            <Flex bg="blackAlpha.50" borderRadius={3} flexDir={'column'} p={5}>
                <Text py={5}>Please Login, <br />
                    Login to use our free services.
                </Text>
                <Button padding=".5rem auto" variant="unstyled" bg="black" color="white" fontSize={13} onClick={onLogin}>Login</Button>
            </Flex>

        </Center>
    )

}
export default Aleart