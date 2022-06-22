// Production Ready , Styling Remains

// Detail Element not filtering

interface prop {
    value: any,
    index: number,
    DB: any
}

import { useState } from "react"
import { Delete, Next } from "../../buttons"
import { Flex, Text, Button } from "@chakra-ui/react"

const Element = ({ value, index, DB }: prop) => {

    // state for trigger user click [to make eui changes]
    const [isClicked, setClick] = useState<boolean>(false);

    // found survey taken in these dates
    const SurveyFoundInParticularDates = DB?.filter((value2: any) => {

        // time stamps => date / number
        const date = new Date(value2.additional.date);

        // date / number => human readable date formet
        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}` === value;
    })

    // mapping Details Element
    const DetailElement = SurveyFoundInParticularDates?.map((value: any, index: number) => {

        // converting keys to arr
        const Keys = Object.keys(value);

        // remove unwanted keys for UI 
        delete Keys[Keys.indexOf('additional')];

        // extract time from timestamp
        const surveyedTime = new Date(value.additional.date).toTimeString()

        // mapping properties [key] of submitted data
        const Child = Keys?.map((key: any, index: number) => {
            return (
                <Flex key={index} my={1} >
                    <Text color="blue"
                        fontSize={13}
                        textTransform={'lowercase'}> &quot; {key} &quot; : </Text>
                    <Text
                        px={2}
                        mx={3}
                        color="white"
                        borderRadius={10}
                        fontSize={13}> {JSON.stringify(value[key])}</Text>
                </Flex>
            )
        });

        return <Flex
            key={index}
            my={5} p={2}
            borderRadius={4}
            bg="blackAlpha.300"
            flexDirection="column"
            border="grey solid 2px" >

            <Text
                py={1}
                pl={2}
                fontSize={12}
                bg="whiteAlpha.100"
                borderRadius={5}>{surveyedTime}</Text>

            <Flex flexDirection="column" >
                {Child}
            </Flex>
        </Flex >
    })

    return (
        <Flex
            key={index}
            m={2} p={'.5rem 2rem'}
            borderRadius={3}
            flexDir={'column'}
            bg="black"
            color={'white'}
            w={(isClicked) ? '100%' : 'initial'}>

            <Flex
                alignItems="center"
                justifyContent={'space-between'} >
                <Text
                    opacity={.8}
                    fontSize={15}>{value}</Text>

                <Text
                    mx={5}
                    fontSize={12}
                    borderRadius={'50%'} >
                    Surved : {SurveyFoundInParticularDates.length}</Text>

                {!isClicked && <Button bg="none" onClick={() => { setClick(true) }} size={'xs'} variant="unstyles" ><Next aspect={35} /></Button>}
                {isClicked && <Button bg="none" onClick={() => { setClick(false) }} size={'xs'} variant="unstyles" > <Delete aspect={40} /></Button>}
            </Flex>

            {isClicked && <Flex flexDir={'column'}>

                <Flex flexDir={'column'}>
                    {DetailElement}
                </Flex>

            </Flex>}
        </Flex>
    )
}
export default Element