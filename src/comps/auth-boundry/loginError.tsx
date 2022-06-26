import Image from "next/image";
import useAuth from "../../hooks/useAuth";
import { Flex, Center, Text, Button } from "@chakra-ui/react";

const Aleart = () => {
    const Auth = useAuth();
    const onLogin = () => {
        Auth.googleAuth()
    }
    return (
        <Center pos="fixed" top="0" left="0" width="100%" height="100%" bg="whiteAlpha.300">
            <Flex minW={'300px'} borderRadius={3} flexDir={'column'} px={5} py={10}>
                <Image width={100} height={100} src={"/undraw_login_re_4vu2.svg"} alt="svg" />
                <Text textAlign={'center'} py={5}> Login not found.</Text>
                <Button padding=".5rem auto" variant="unstyled" border="2px solid black" fontSize={13} onClick={onLogin}>Login with Google</Button>
            </Flex>
        </Center>
    )

}
export default Aleart
