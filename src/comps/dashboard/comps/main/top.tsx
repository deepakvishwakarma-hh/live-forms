import Link from "next/link";
import * as Chakra from "@chakra-ui/react"

const Top = () => {

    return (
        <Chakra.Flex bg="#EFEFEF" alignItems={'center'}>

            <Chakra.Flex flex={1}></Chakra.Flex>

            <Chakra.Flex flex={1} justifyContent={'end'} px={5} alignItems="center">
                <Link href="/editor" passHref>
                    <Chakra.Flex mx={5} cursor={'pointer'} alignItems={'center'} px={5} py={2} borderRadius={5} color="white" fontSize={12} bg="black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                        <Chakra.Text ml={2} letterSpacing={.2}>
                            Create New Survey
                        </Chakra.Text>
                    </Chakra.Flex>
                </Link>
            </Chakra.Flex>
        </Chakra.Flex >
    )
}
export default Top;
