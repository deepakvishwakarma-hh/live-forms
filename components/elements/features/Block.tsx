
import Image from 'next/image'

interface propType {
    topic: string,
    paragraph: string,
    url: string
}

import { Flex, Text, Heading, Center, Box } from "@chakra-ui/react";

const Block = ({ topic, paragraph, url }: propType) => {
    return (
        <Flex
            flexDir={['column', 'column', 'row', 'row']}
            alignItems={'center'} my={10} h={'20rem'}>

            <Center flex={1}
                display={['none', 'none', 'block', 'block']}>
                <Image width={300} height={300} alt="img" src={url} />
            </Center>


            <Center flex={1}
                display={['block', 'block', 'none', 'none',]}
                position="relative"
                width={'100%'}
                height={'300px'}
            >
                <Image layout='fill' alt="img" src={url} />
            </Center>

            <Box
                flex={2}
                pl={[0, 0, 5, 5]}
                pt={['2rem', '2rem', 0, 0]}
            >
                <Heading
                    textAlign={['center', 'center', 'left', 'left']}
                    my={[4, 2, 2, 2]}
                    as={'h5'}
                    fontWeight={['500', 'initial', 'initial', 'initial']}
                    fontSize={[20, 23, 23, 23]}

                >{topic}</Heading>
                <Text
                    fontSize={[13, 15, 'initial', 'initial']}
                    px={['0em', '5em', '0em', '0em']}
                    textAlign={['center', 'center', 'left', 'left']}

                    color={'grey'}>{paragraph}</Text>
            </Box>

        </Flex>


    )
}

export default Block