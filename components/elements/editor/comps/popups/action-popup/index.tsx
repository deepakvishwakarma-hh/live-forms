import React from "react";
import { motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react"
import DropboxOpt from "./popup-dropdown";
import * as Redux from "../../../../../../state-store";

const Popup = () => {

    const dispatch = Redux.useAppDispatch()

    // user-defined-funtions
    const onPush = () => { dispatch(Redux.pushMeta()) }
    const onClose = () => { dispatch(Redux.setAction(undefined)) }
    const onKeyUp = (event: any) => {

        // push and hide on enter key
        if (event.keyCode === 13) {
            onPush()
            onClose()
        }
        // hide the popup on ESC key
        if (event.keyCode === 27) {
            onClose()
        }
    }

    const MotionChakra = motion(Chakra.Center)

    return (
        <MotionChakra exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.1 }} onKeyUp={onKeyUp} top={0} left={0} w="100%" h="100%" zIndex={9999} position="fixed" bg='blackAlpha.500'>
            <Component />
        </MotionChakra >
    )
}
export default React.memo(Popup)

// for Parent Component;

const Component = () => {

    const dispatch = Redux.useAppDispatch()
    const action = Redux.useAppSelector(store => store.__generator.__action)

    const placeholderChangeHandler = (e: any) => {
        dispatch(Redux.setPopupPlaceholder(e.target.value))
    }

    const nameChangeHandler = (e: any) => {
        dispatch(Redux.setPopupName(e.target.value))
    }

    const paragraphChangeHandler = (e: any) => {
        dispatch(Redux.setPopupParagraph(e.target.value))
    }

    const dropBoxOptConditionallyShow = (action == "dropdown") ? true : false;

    const onClose = () => {
        dispatch(Redux.setAction(undefined))
    }

    const onPush = () => { dispatch(Redux.pushMeta()) }

    return (

        <Chakra.Box minW={500} maxW={500} bg="white" p={10} borderRadius={10} >

            <label>
                <Chakra.Text display="inline" color='black' fontWeight={500} py={2}>Name</Chakra.Text>
                <Chakra.Text display="inline" color={'blue'} fontSize={13}> →  Identification of data.</Chakra.Text>
                <Chakra.Input _focus={{ transition: 'all .5s', borderColor: "blue", bg: 'blue.50' }} onChange={nameChangeHandler} my={2} placeholder='Element name' size="xs" ></Chakra.Input>
            </label>

            <label >
                <Chakra.Text display="inline" color='black' fontWeight={500} py={2}>Paragraph</Chakra.Text>
                <Chakra.Text display="inline" color={'blue'} fontSize={13}> → Informative text about input.</Chakra.Text>
                <Chakra.Input _focus={{ transition: 'all .5s', borderColor: "blue", bg: 'blue.50' }} onChange={paragraphChangeHandler} my={2} placeholder="Element paragraph" size="xs"></Chakra.Input>
            </label>

            {!dropBoxOptConditionallyShow && <label >
                <Chakra.Text display="inline" color='black' fontWeight={500} py={2}>Placeholder</Chakra.Text>
                <Chakra.Text display="inline" color={'blue'} fontSize={13}> →Tells the user what to do in the input..</Chakra.Text>
                <Chakra.Input _focus={{ transition: 'all .5s', borderColor: "blue", bg: 'blue.50' }} onChange={placeholderChangeHandler} my={2} placeholder='Element placeholder' size="xs"></Chakra.Input>
            </label>}

            {dropBoxOptConditionallyShow && <DropboxOpt />}

            <Chakra.Flex justifyContent={'space-between'} p={0}>

                <Chakra.Button onClick={onClose} flex={1} mr={3} mt={5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </Chakra.Button>

                <Chakra.Button onClick={onPush} flex={1} ml={3} mt={5}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </Chakra.Button>
            </Chakra.Flex>
        </Chakra.Box >


    )
}

