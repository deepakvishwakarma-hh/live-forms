interface prop { data: any }
import Router from 'next/router'
import { Box, Flex, Text } from '@chakra-ui/react';
import useDateConvertion from '../../../hooks/useDateConvertion';

const Form = ({ data }: prop) => {

    const id = data.id;

    const { title } = data.Client.__header;

    const response = data?.Database?.length ?? "0";

    const dateConversion = useDateConvertion(data.id);

    const onClick = () => { Router.push('/dashboard/' + id) }

    const conditionallyIndicatiorColor = (response == 0) ? "red" : "green";

    return (
        <Box
            p={3}
            m={2}
            bg="black"
            minW="300px"
            borderRadius={5}
            onClick={onClick}
            maxWidth={'300px'} >

            <Flex
                flexDirection="column"
                color="white" >

                <Box
                    w={"10px"}
                    h={"10px"}
                    alignSelf={'end'}
                    bg={conditionallyIndicatiorColor}
                    borderRadius="10px"></Box>

                <Flex alignItems={'center'} py={10} >

                    <Text
                        pb={2}
                        flex={1}
                        fontSize={15}
                        letterSpacing={1}
                        textAlign="center"
                        textTransform="capitalize" >{title}</Text>

                </Flex>

                <Flex flex={1} fontSize={12} alignItems={'center'} justifyContent="center">
                    <Flex alignItems={'end'}  >
                        <Text
                            color="#E9A6A6"
                            textTransform={'uppercase'}
                            letterSpacing={1} > Res : </Text>

                        <Text
                            ml={1}
                            color="whiteAlpha.800">  {response} </Text>
                    </Flex>

                    <Flex alignItems={'end'} ml={2} >
                        <Text
                            color="#E9A6A6"
                            textTransform={'uppercase'}
                            letterSpacing={1} >Pub : </Text>

                        <Text
                            ml={1}
                            fontSize={13}
                            color="whiteAlpha.800"> {dateConversion}</Text>
                    </Flex>
                </Flex>

            </Flex>
        </Box >
    )
};

export default Form;