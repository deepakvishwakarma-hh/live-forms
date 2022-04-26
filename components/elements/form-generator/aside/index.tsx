import {
    setAction,
    useAppDispatch,
    useAppSelector
} from "../../../../state-store";
import Popup from "../popup";
import Button from "./button";
import Header from "./header-popup";
import { Grid, Flex } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
const Aside = () => {

    const dispatch = useAppDispatch();
    const onClick = (name: string) => { dispatch(setAction(name)) }
    const action = useAppSelector(store => store.__generator.__action)
    const headerBox = useAppSelector(store => store.__generator.__headerBox)
    const popupConditionallyShow = (action !== undefined) ? true : false;

    return (

        <Grid gridTemplate={" 80px auto  auto/ 100%"} bg="white" >

            <Flex alignItems={'center'} justifyContent="center">
                <svg width="80" height="50" viewBox="0 0 100 50" fill="none" >
                    <rect width="100" height="50" fill="transparent" />
                    <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
                    <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
                </svg>
            </Flex>

            {headerBox && <Header />}

            <Flex p={2} flexWrap="wrap" flexDir={'column'} >
                <Button name="input" onClick={onClick} />
                <Button name="textarea" onClick={onClick} />
                <Button name="dropdown" onClick={onClick} />
            </Flex>
            <AnimatePresence>{popupConditionallyShow && < Popup />}  </AnimatePresence>

        </Grid>

    )
}
export default Aside


