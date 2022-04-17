interface prop {
    data: any,
    update: any
}

import { Delete, Add } from "../buttons"
import { useState } from "react"

import { Box, Text, Button, Flex, Input } from "@chakra-ui/react"

const Options = ({ data, update }: prop) => {

    const [input, setInput] = useState<string>("")

    const onRemove = (index: number) => {

        const filteredArr = data.filter((item: string, i: number) => i !== index)
        update((prev: any) => {
            return { ...prev, options: filteredArr }
        })

    }

    const onAdd = () => {
        update((prev: any) => {
            return { ...prev, options: [...prev.options, input] }
        })
    }

    const onInputChange = (e: any) => {
        setInput(e.target.value)
    }

    const optMapper = data.map((item: any, index: number) => {
        return <Flex alignItems={'center'} justifyContent={'space-between'} key={index}>
            <Text>{item}</Text>
            <Box>
                <Delete aspect={30} color="red" onClick={() => { onRemove(index) }} />
            </Box>
        </Flex>
    })

    return (
        <Box >
            <Text mb={2} color="blue">Dropdown Options</Text>
            <ul>{optMapper}</ul>

            <Flex alignItems={'centers'} my={3}>
                <Input size="xs" onChange={onInputChange} type="text" placeholder="add more options" mr={2} />
                <Add aspect={30} color="black" onClick={onAdd} />
            </Flex>
        </Box>
    )

}

export default Options