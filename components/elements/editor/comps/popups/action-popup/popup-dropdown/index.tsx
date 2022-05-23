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

    const optionUiList = (opt?.length !== 0) ? <Flex mt={5} flexWrap="wrap" > {optMapper} </Flex> : <Flex>...</Flex> // if opt is empty, show this text

    return (
        <Box>
            <Text display="inline" color='black' fontWeight={500} py={2}>Options</Text>
            <Text display="inline" color={'blue'} fontSize={13}> →User can select</Text>
            {optionUiList}
            <Flex mt={3} >
                <Input size={'xs'} _focus={{ transition: 'all .5s', borderColor: "blue", bg: 'blue.50' }} mx={2} flex={2} value={input} onChange={onChangeHandler} placeholder="type options" type="text" />
                <Button size="xs" onClick={onPushHandler} mx={2} flex={1}>
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
        <Flex m={2} h="30px" borderRadius={5} my={1} alignItems={'center'} justifyContent='space-between' border="1px gray solid" overflow={'hidden'}>
            <Text px={2} fontSize={13}> {value}</Text>
            <Button borderRadius={0} bg="none" onClick={onRemove}>
                <Delete aspect={30} color='red' />
            </Button>
        </Flex>
    )
}

