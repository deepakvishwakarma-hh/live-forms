import Image from "next/image"
import { motion } from 'framer-motion'
import * as Chakra from "@chakra-ui/react"
import * as Redux from "../../../../../../../../state-store"

const ActionButton = ({ text }: { text: string }) => {

    const Wrapper = motion(Chakra.Flex)
    const imgSrc = `/generator/${text}.svg`;
    const dispatch = Redux.useAppDispatch();
    const onClick = () => { { dispatch(Redux.setAction(text)) } }

    return (
        <Wrapper whileHover={{ borderRight: "2px gray solid", }} onClick={onClick} my={1} py={2} bg="gray.50" pl={5}>
            <Image src={imgSrc} alt={text} width={15} height={15} />
            <Chakra.Text ml={5} textTransform="capitalize" fontSize={'.8rem'} fontWeight={500}>{text}</Chakra.Text>
        </Wrapper>
    )
}

export default ActionButton