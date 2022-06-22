import Image from "next/image";
import { Flex, Box, Text, Heading } from "@chakra-ui/react";
import HireDeveloperButton from "../../micros/HireDeveloperButton";

const Intro = () => {

    return (
        <Flex
            mt={10}
            px={["1.8em", "0em", "0em", "0em"]}
            flexDir={['column-reverse', 'column-reverse', 'row', 'row']}>

            < Box
                flex={1} >

                <Text
                    mb={10}
                    fontSize={15}
                    pr={['5rem', '5rem', 0, 0]}>  Great place to <b>Edit</b> and <b>Host</b> surveys.</Text>

                <Heading
                    mb={10}
                    as='h1'
                    fontSize={['2em', '2em', '2.5em', '3em']}
                    lineHeight={["3rem", "4rem", "4rem", "4rem"]}
                    fontWeight={['bold']} >Create Simple, Free, Fast Forms for Surveys</Heading>

                <HireDeveloperButton />
            </Box >

            <Box
                position="relative"
                mb={[10, 10, 0, 0]}
                mx={['auto', 'auto', '0', '0']}
                flex={['initial', 'initial', 1, 1]}
                display={['none', 'none', 'block', 'block']}
                width={['80%', '40%', 'initial', 'initial']}
                height={['200px', '300px', 'initial', 'initial']}>
                <Image layout="fill" src="/form.svg" alt=" by unDraw" />
            </Box>

        </Flex >
    )
}

export default Intro