import {
    useAppSelector,
    useAppDispatch,
    removePopupOption
} from "../../../../../state-store";
import { Flex, Text, Button } from "@chakra-ui/react";
import { Delete } from "../../../buttons"

interface prop {
    value: string,
    index: number,
}

const Options = ({ value, index }: prop) => {

    const opt = useAppSelector(store => store.__generator.__popup.options)

    const dispatch = useAppDispatch();

    const onRemove = () => {
        const optToBeRemoved = opt[index];
        dispatch(removePopupOption(optToBeRemoved))
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


export default Options;