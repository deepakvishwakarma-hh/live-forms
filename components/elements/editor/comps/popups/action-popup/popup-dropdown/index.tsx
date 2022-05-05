import { useState } from 'react'
import { Add, Delete } from '../../../../../buttons';
import * as Redux from "../../../../../../../state-store"
import { Flex, Box, Input, Button, Text } from "@chakra-ui/react";

const DropboxOpt = () => {

    const dispatch = Redux.useAppDispatch();
    const [input, setInput] = useState<string>('')
    const opt = Redux.useAppSelector(store => store.__generator.__popup.options)

    const onPushHandler = () => {
        // pushing irrupted when input is empty
        (input !== '')
            ? dispatch(Redux.pushPopupOptions(input))
            : alert('empty')
        // empty input after pushing
        setInput('')
    };

    const onChangeHandler = (e: any) => { setInput(e.target.value) } // input Change handler

    const optMapper = opt?.map((option: string, index: number) => <Option value={option} index={index} key={index} />) // Options mapper

    const optionUiList = (opt?.length !== 0) ? <Flex mt={5} flexWrap="wrap" > {optMapper} </Flex> : <p>No options...</p> // if opt is empty, show this text

    return (
        <Box>
            {optionUiList}
            <Flex mt={3} >
                <Input mx={2} flex={2} value={input} onChange={onChangeHandler} placeholder="type options" type="text" />
                <Button onClick={onPushHandler} mx={2} flex={1}>
                    <Add aspect={30} color="blue" />
                </Button>
            </Flex>

        </Box>
    )
}

export default DropboxOpt

interface prop {
    value: string,
    index: number,
}

const Option = ({ value, index }: prop) => {

    const dispatch = Redux.useAppDispatch();
    const opt = Redux.useAppSelector(store => store.__generator.__popup.options)

    const onRemove = () => {
        const optToBeRemoved = opt[index];
        dispatch(Redux.removePopupOption(optToBeRemoved))
    }
    return (
        <Flex m={2} borderRadius={5} my={1} alignItems={'center'} justifyContent='space-between' border="1px black solid" overflow={'hidden'}>
            <Text px={2} fontSize={13}> {value}</Text>
            <Button borderRadius={0} onClick={onRemove}>
                <Delete aspect={40} color='red' />
            </Button>
        </Flex>
    )
}

