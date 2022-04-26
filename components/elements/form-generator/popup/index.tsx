import {
    pushMeta,
    setAction,
    setPopupName,
    useAppDispatch,
    useAppSelector,
    setPopupParagraph,
    setPopupPlaceholder
} from "../../../../state-store";

import DropboxOpt from "./comp/popup-dropdown"
import { Box, Center, Input, Text, Flex, Button } from "@chakra-ui/react";

const Popup = () => {

    const dispatch = useAppDispatch();

    const action = useAppSelector(store => store.__generator.__action)

    const placeHolderNameOnChngeHandler = (e: any) => {
        dispatch(setPopupPlaceholder(e.target.value))
    }

    const inputNameOnChngeHandler = (e: any) => {
        dispatch(setPopupName(e.target.value))
    }
    const inputParagraphOnChngeHandler = (e: any) => {

        dispatch(setPopupParagraph(e.target.value))
    }

    const dropBoxOptConditionallyShow = (action == "dropdown") ? true : false;

    const onClose = () => { dispatch(setAction(undefined)) }

    const onPush = () => { dispatch(pushMeta()) }

    const onKeyUp = (event: any) => {

        // push and hide
        if (event.keyCode === 13) {
            onPush()
            onClose()
        }
        // hide the popup
        if (event.keyCode === 27) {
            onClose()
        }
    }

    return (
        <Center onKeyUp={onKeyUp}
            top={0}
            left={0}
            w="100%"
            h="100%"
            zIndex={9999}
            position="fixed"
            bg='blackAlpha.800'>

            <Box minW={500} maxW={500} bg="white" p={10}>

                <label >
                    <Text color='black' fontWeight={700} py={2}>Name</Text>
                    <Text color={'grey'} fontSize={13}>
                        This name attribute helps with surveys. This attribute tells the user what value to enter.
                        The value entered by the user is shown on the key in the database.</Text>
                    <Input onChange={inputNameOnChngeHandler} mt={2} placeholder='your element name' size="sm"></Input>
                </label>

                <label >
                    <Text color='black' fontWeight={700} py={2}>Paragraph</Text>
                    <Text color={'grey'} fontSize={13}>
                        Paragraphs provide more information about the element to the user..</Text>
                    <Input onChange={inputParagraphOnChngeHandler} mt={2} placeholder='your element paragraph' size="sm"></Input>
                </label>

                <label >
                    <Text color='black' fontWeight={700} py={2}>Placeholder</Text>
                    <Text color={'grey'} fontSize={13}>The place holder tells the user what to do in the input..</Text>
                    <Input onChange={placeHolderNameOnChngeHandler} mt={2} placeholder='your element placeholder' size="sm"></Input>
                </label>

                {dropBoxOptConditionallyShow && <DropboxOpt />}

                <Flex justifyContent={'space-between'} p={0}>

                    <Button onClick={onClose} flex={1} mr={3} mt={5}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </Button>

                    <Button onClick={onPush} flex={1} ml={3} mt={5}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </Button>
                </Flex>
            </Box>
        </Center >
    )
}
export default Popup




