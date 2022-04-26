import Form from "./forms";
import Image from "next/image";
import Router from "next/router";
import { Grid, Flex, Button, Center, Text, Box } from "@chakra-ui/react";

const Main = ({ arr, data }: any) => {
    const maps = arr.map((item: string, index: number) => <Form data={data[item]} key={index} />)
    const isDataNotFound = data == 'data-not-found';

    return (
        <Grid gridTemplate={" auto / 100%"} >
            {!isDataNotFound &&
                <Flex flexDir={'column'} bg="#00000015">

                    <Flex px={3}
                        py={5}
                        alignItems="center"
                        bgGradient='linear(to-r, #ffafbd,#ffc3a0)'>

                        <Center flex={1}>
                            <Image src="/content.svg" width={300} height={300} alt="hii" />
                        </Center >
                        <Box
                            flex={1}
                            p={10}
                            flexDir="column">
                            <Text fontSize={20} fontWeight="500" py={1}> Hey!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, consequatur?
                            </Text>
                            <Button
                                bg="black"
                                color="white"
                                fontSize={12}
                                fontWeight={400}
                                borderRadius={0}
                                onClick={() => { Router.push('/editor') }}>New Survey</Button>
                        </Box>
                    </Flex>
                    <Flex
                        padding={5}
                        flexWrap={'wrap'}
                        h="fit-content" > {maps} </Flex>
                </Flex>
            }

            {isDataNotFound &&
                <Center>
                    <Flex flexDir={'column'} py={10} borderRadius={3} px={3} >
                        <Image src="/content.svg" width={400} height={400} alt="hii" />
                        <Button onClick={() => { Router.push('/editor') }}>Create New Survey</Button>
                    </Flex>
                </Center>}
        </Grid>
    )
}
export default Main;





