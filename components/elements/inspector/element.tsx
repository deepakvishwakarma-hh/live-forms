interface prop {
    data: any,
    index: number
}
import Marker from "./marker"
import Editor from "./editor"
import Image from "next/image"
import { useState } from "react"
import { Delete } from "../buttons"
import { Box, Flex, Text } from "@chakra-ui/react"
import { useAppDispatch, deleteFromMeta } from "../../../state-store"

const Element = ({ data, index }: prop) => {
    const dispatch = useAppDispatch()
    const [isExpanded, setExpended] = useState<boolean>(false);

    const onClick = () => { setExpended(!isExpanded) }

    const onDelete = (e: any) => {
        e.stopPropagation()
        const permission = confirm('do you really want to detele them')
        permission && dispatch(deleteFromMeta(index));
    }

    const imageSrcConditonally = isExpanded ? '/chevron-up.svg' : "/chevron-down.svg";
    const isNameError = (data.name == '');

    //  splicing big name and joining ...
    const splicedName = data.name[5] ? data?.name?.slice(0, 5) + '...' : data.name;

    return (
        <Box
            border={'1px solid black'}
            padding={'0 1rem'}
            fontSize={'.8rem'}
            margin={'.5rem 0'}
            style={{ background: isNameError ? '#ff000017' : 'white' }}>

            <Flex
                padding={'.5rem'}
                onClick={onClick}
                justifyContent="space-between">

                <Marker action={data.action}></Marker>
                <Text>{splicedName}</Text>

                <Flex>
                    <Flex mx={'1rem'} onClick={onDelete}>
                        <Delete
                            aspect={30}
                            color="red"
                        />
                    </Flex>
                    <Image
                        src={imageSrcConditonally}
                        width={10}
                        height={10}
                        alt="noen" />
                </Flex>
            </Flex>

            {isExpanded && <Box>

                <Editor index={index} />

            </Box>}
        </Box>
    )
}

export default Element