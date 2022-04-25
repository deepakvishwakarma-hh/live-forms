import Form from "./forms";
import Image from "next/image";
import Router from "next/router";
import { Grid, Flex, Center, Button } from "@chakra-ui/react";

const Main = ({ arr, data }: any) => {

    const maps = arr.map((item: string, index: number) => <Form data={data[item]} key={index} />)

    const isDataNotFound = data == 'data-not-found'

    return (

        <Grid gridTemplate={" auto / 100%"} >

            {!isDataNotFound && <Flex flexWrap={'wrap'} bg="white" padding={5} h="fit-content"> {maps}</Flex>}

            {isDataNotFound && <Center >
                <Flex flexDir={'column'} py={10} borderRadius={3} px={3} >
                    <Image src="/content.svg" width={400} height={400} alt="hii" />
                    <Button onClick={() => { Router.push('/editor') }}>Create New Survey</Button>
                </Flex>
            </Center>}

        </Grid>
    )
}
export default Main;





