import * as Chakra from "@chakra-ui/react"
import ActionButton from "./comps/ActionButton"
import { AnimatePresence } from "framer-motion";
import Popup from "../../../popups/action-popup"
import HeaderPopup from "../../../popups/header-popup"
import * as Redux from "../../../../../../../state-store";
import ProductionObstacleAleart from "../../../alerts/production-obstacle";

const AsideLeft = () => {

    const buttonArr = ['input', 'textarea', 'dropdown'];
    const action = Redux.useAppSelector(store => store.__generator.__action)
    const headerBox = Redux.useAppSelector(store => store.__generator.__headerBox)
    const popupConditionallyShow = (action !== undefined) ? true : false;
    const isProductionObstacle = Redux.useAppSelector(store => store.alearts.formCreated)
    const actionButtonMaps = buttonArr.map((item: string, index: number) => <ActionButton key={index} text={item} />)

    return (
        <Chakra.Grid gridTemplate={"100px auto / 100%"} px={5} bg="#EFEFEF" >
            <Chakra.Flex alignItems={'center'} ml={-3} fontSize={".9rem"}>
                <svg width="80" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="50" fill="transparent " />
                    <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
                    <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
                </svg>
                <Chakra.Text fontSize={17} fontWeight={500} textTransform="uppercase" letterSpacing={1}>Liveforms</Chakra.Text>
            </Chakra.Flex>
            <Chakra.Flex flexDir={'column'} >
                {actionButtonMaps}
            </Chakra.Flex>
            <AnimatePresence>
                {popupConditionallyShow && < Popup />}
            </AnimatePresence>
            <AnimatePresence>
                {headerBox && <HeaderPopup />}
            </AnimatePresence>
            {isProductionObstacle && <ProductionObstacleAleart />}
        </Chakra.Grid >
    )
}
export default AsideLeft
