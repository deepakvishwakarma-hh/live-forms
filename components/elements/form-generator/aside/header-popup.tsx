
import { Flex, Input, Textarea, Center, Text, Button } from "@chakra-ui/react";

import {
    useAppDispatch,
    useAppSelector,
    setMetaHeaderTitle,
    setMetaHeaderSubTitle,
    toggleHeaderBox
} from "../../../../state-store";

const Header = () => {

    const dispatch = useAppDispatch()

    const header = useAppSelector(store => store.__generator.__meta.__header);

    const { title, subtitle } = header;

    const inputProperties = {
        type: "text",
        placeholder: "Title",
        value: title,
        onChange: (e: any) => {
            dispatch(setMetaHeaderTitle(e.target.value))
        },
    }
    const textareaProperties = {
        placeholder: "paragraph..",
        value: subtitle,
        onChange: (e: any) => {
            dispatch(setMetaHeaderSubTitle(e.target.value))
        },
    }

    const onClose = () => {
        dispatch(toggleHeaderBox(false))
    }

    return (

        <Center p={3}
            position="fixed"
            top={0}
            left={0}
            bg={'blackAlpha.800'}
            width={'100%'}
            height={'100%'}
            zIndex={9999}
        >

            < Flex minW={500} maxW={500} p={10} flexDir={'column'} bg="white" >

                <Text color='black' fontWeight={600} textTransform="uppercase" py={1} >Title</Text>
                <Text color={'grey'} fontSize={13}> Title of The Survey page.</Text>
                <Input
                    mt={3}
                    bg="gray.100"
                    size={'xs'}
                    mb={2}
                    overflow="hidden"
                    borderRadius={2}
                    {...inputProperties}>
                </Input>

                <Text color='black' fontWeight={600} textTransform="uppercase" py={1} >Paragraph</Text>
                <Text color={'grey'} fontSize={13}> Short paragraph about your survey and company.</Text>

                <Textarea
                    mt={3}
                    bg="gray.100"
                    overflow="hidden"
                    borderRadius={2}
                    size={'xs'}
                    {...textareaProperties}>
                </Textarea>

                <Button onClick={onClose} _hover={{ opacity: .8 }} bg="black" color="white" fontSize={14} mt={5}> Close</Button>
            </Flex >

        </Center>)
}
export default Header

