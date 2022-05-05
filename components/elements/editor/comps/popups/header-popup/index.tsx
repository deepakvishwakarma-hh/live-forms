import React from "react";
import { motion } from 'framer-motion'
import * as Chakra from "@chakra-ui/react"
import * as Redux from "../../../../../../state-store";

const Header = () => {

    const MotionCenter = motion(Chakra.Center)

    return (
        <MotionCenter exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.1 }} p={3} position="fixed" top={0} left={0} bg={'blackAlpha.500'} width={'100%'} height={'100%'} zIndex={9999}>
            <Component />
        </MotionCenter>)
}
export default React.memo(Header)

const Component = () => {

    const dispatch = Redux.useAppDispatch()
    const header = Redux.useAppSelector(store => store.__generator.__meta.__header);
    const { title, subtitle } = header;

    const inputProperties = {
        type: "text",
        value: title,
        placeholder: "Title",
        onChange: (e: any) => {
            dispatch(Redux.setMetaHeaderTitle(e.target.value))
        },
    }

    const textareaProperties = {
        placeholder: "paragraph..",
        value: subtitle,
        onChange: (e: any) => {
            dispatch(Redux.setMetaHeaderSubTitle(e.target.value))
        },
    }

    const onClose = () => {
        dispatch(Redux.toggleHeaderBox(false))
    }

    return (
        <Chakra.Flex minW={500} maxW={500} p={10} flexDir={'column'} bg="white" >

            <Chakra.Text color='black' fontWeight={600} textTransform="capitalize" py={1} >Title</Chakra.Text>
            <Chakra.Text color={'grey'} fontSize={13}> Title of The Survey page.</Chakra.Text>
            <Chakra.Input mt={3} bg="gray.100" size={'xs'} mb={2} overflow="hidden" borderRadius={2} {...inputProperties}>
            </Chakra.Input>

            <Chakra.Text color='black' fontWeight={600} textTransform="capitalize" py={1} >Paragraph</Chakra.Text>
            <Chakra.Text color={'grey'} fontSize={13}> Short paragraph about your survey and company.</Chakra.Text>

            <Chakra.Textarea mt={3} bg="gray.100" overflow="hidden" borderRadius={2} size={'xs'} {...textareaProperties}>
            </Chakra.Textarea>

            <Chakra.Button onClick={onClose} _hover={{ opacity: .8 }} bg="black" color="white" fontSize={14} mt={5}> Close</Chakra.Button>
        </Chakra.Flex >
    )
}