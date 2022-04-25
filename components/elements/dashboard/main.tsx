import Form from "./forms";
import { Grid, Flex } from "@chakra-ui/react";

const Main = ({ arr, data }: any) => {

    const maps = arr.map((item: string, index: number) => <Form data={data[item]} key={index} />)

    return (

        <Grid gridTemplate={" auto / 100%"} >

            <Flex flexWrap={'wrap'} bg="white" padding={5} h="fit-content">
                {maps}
            </Flex>

        </Grid>
    )
}
export default Main;





