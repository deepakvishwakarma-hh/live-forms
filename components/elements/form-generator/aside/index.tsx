import Popup from "../popup";
import Button from "./button";
import { AnimatePresence } from "framer-motion";
import { Grid, Flex } from "@chakra-ui/react";
import Header from "./header";

import {
    setAction,
    useAppDispatch,
    useAppSelector
} from "../../../../state-store";

const Aside = () => {

    const dispatch = useAppDispatch();

    const onClick = (name: string) => { dispatch(setAction(name)) }

    const Action = useAppSelector(store => store.__generator.__action)

    const headerBox = useAppSelector(store => store.__generator.__headerBox)

    console.log(headerBox)

    const popupConditionallyShow = (Action !== undefined) ? true : false;

    return (

        <Grid gridTemplate={" 80px auto  auto/ 100%"} bg="white" >

            <Flex alignItems={'center'} justifyContent="center">
                <svg width="80" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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


