import * as Chakra from "@chakra-ui/react"
import ActionButton from "./comps/ActionButton"
import Popup from "../../../popups/action-popup"
import HeaderPopup from "../../../popups/header-popup"
import * as Redux from "../../../../../../../state-store";


import { AnimatePresence } from "framer-motion";
const AsideLeft = () => {

    const buttonArr = ['input', 'textarea', 'dropdown']
    const action = Redux.useAppSelector(store => store.__generator.__action)
    const headerBox = Redux.useAppSelector(store => store.__generator.__headerBox)
    const popupConditionallyShow = (action !== undefined) ? true : false;

    return (
        <Chakra.Grid gridTemplate={"100px auto / 100%"}  >

            <Chakra.Flex alignItems={'center'} pl={5} fontSize={".9rem"}>
                <Chakra.Text flex={1} fontWeight={500}>Action Bar</Chakra.Text>
                <Chakra.Box mr={1} flex={.1} bg="gray.200" width={'100%'} h={'5px'} borderRadius={'5px'}></Chakra.Box>
                <Chakra.Box flex={1} bg="gray.500" width={'10%'} h={'2px'}></Chakra.Box>
            </Chakra.Flex>

            <Chakra.Flex flexDir={'column'} >
                {buttonArr.map((item, index) => <ActionButton key={index} text={item} />)}
            </Chakra.Flex>

            <AnimatePresence>
                {popupConditionallyShow && < Popup />}
            </AnimatePresence>

            <AnimatePresence>
                {headerBox && <HeaderPopup />}
            </AnimatePresence>

        </Chakra.Grid >
    )
}
export default AsideLeft
