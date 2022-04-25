import { Center, Text } from "@chakra-ui/react"

const UseLess = () => {
    return (
        <Center
            pos="fixed"
            top={0}
            left={0}
            width={'100%'}
            height={'100%'}
            flexDir="column"
            bg="black">

            <Text color="white" fontSize={20}>I&apos;m uselesss</Text>
            <Text color="grey" fontSize={15}>The data is not found, should I do it again? </Text>
        </Center>
    )
}
export default UseLess