interface prop {
    index: number
}

import {
    editFromMeta,
    useAppDispatch,
    useAppSelector
} from "../../../state-store"
import Options from "./options"
import { useState, useEffect } from "react"
import { Input, Flex, Text } from "@chakra-ui/react"

const Editor = ({ index }: prop) => {

    const Meta = useAppSelector(store => store.__generator.__meta.__custom);
    const [state, setState] = useState(Meta[index])
    const dispatch = useAppDispatch()
    const onChange = (e: any) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    // help to fast refresh - load
    useEffect(() => { dispatch(editFromMeta({ index, object: state })) })

    return (
        <Flex flexDir={'column'} pb={5} >
            <Text color={'black'} fontWeight={600}>Name</Text>
            <Input
                my={2}
                name="name"
                size={'xs'}
                type="text"
                placeholder="name"
                onChange={onChange}
                value={state.name} />
            <Text color={'black'} fontWeight={600}>Paragraph</Text>
            <Input
                my={2}
                size={'xs'}
                type="text"
                onChange={onChange}
                name="paragraph"
                placeholder="paragraph"
                value={state.paragraph} />
            <Text color={'black'} fontWeight={600}>Placeholder</Text>
            <Input
                my={2}
                size={'xs'}
                type="text"
                name="placeholder"
                onChange={onChange}
                placeholder="placeholder"
                value={state.placeholder} />
            {state.options && <Options
                data={state.options}
                update={setState} />}
        </Flex>
    )
}
export default Editor