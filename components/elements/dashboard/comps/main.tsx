import Form from "./forms";
import { motion } from 'framer-motion'
import { Grid, Flex } from "@chakra-ui/react";

const Main = ({ arr, data }: any) => {

    const MotionGrid = motion(Grid)

    const maps = arr.map((item: string, index: number) => <Form data={data[item]} key={index} />)

    const isDataNotFound = data == 'data-not-found';

    const wrapperAnimation = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 1 } }
    }

    return (
        <MotionGrid {...wrapperAnimation} gridTemplate={" 100% / 100%"}>
            {!isDataNotFound &&
                <Flex px={"2rem"} flexDir={'column'} bg="#00000015" bgImage="url('/dashboard-bg.jpg')" bgSize="cover">

                    <Flex py={5} h="fit-content" flexDir={'row'} flexWrap="wrap" maxH={'fit-content'} overflowY={'scroll'} css={{
                        '&::-webkit-scrollbar': {
                            width: '2px',
                        },
                        '&::-webkit-scrollbar-track': {
                            width: '20px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'gray',
                            borderRadius: '24px',
                        },
                    }}> {maps} </Flex>
                </Flex>}
        </MotionGrid >
    )
}
export default Main;



