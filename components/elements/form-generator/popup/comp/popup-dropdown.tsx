// OPT
import Option from "./popup-dropdown-options"
import { useState } from 'react'
import {
    useAppSelector,
    useAppDispatch,
    pushPopupOptions
} from "../../../../../state-store";

import { UnorderedList, ListItem } from "@chakra-ui/react";

import { Flex, Box, Input, Button } from "@chakra-ui/react";

import { Add } from "../../../buttons"

const DropboxOpt = () => {

    const dispatch = useAppDispatch();

    const opt = useAppSelector(store => store.__generator.__popup.options)

    const [input, setInput] = useState<string>('')

    const onPushHandler = () => {
        // pushing irrupted when input is empty
        (input !== '')
            ? dispatch(pushPopupOptions(input))
            : alert('empty')
        // empty input after pushing
        setInput('')
    };

    const onChangeHandler = (e: any) => { setInput(e.target.value) } // input Change handler

    const optMapper = opt?.map((option: string, index: number) => <Option value={option} index={index} key={index} />) // Options mapper

    const optionUiList = (opt?.length !== 0) ? <Flex mt={5} flexWrap="wrap" > {optMapper} </Flex> : <p>No options...</p> // if opt is empty, show this text

    return (
        <Box >

            {optionUiList}

            <Flex mt={3} >
                <Input mx={2} flex={2}
                    value={input}
                    onChange={onChangeHandler}
                    placeholder="type options"
                    type="text" />

                <Button onClick={onPushHandler} mx={2} flex={1}>
                    <Add aspect={30} color="blue" />
                </Button>
            </Flex>

        </Box>
    )
}



export default DropboxOpt

