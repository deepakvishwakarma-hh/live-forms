import Image from "next/image"
import { motion } from 'framer-motion'
import * as Chakra from "@chakra-ui/react"
import * as Redux from "../../../../../../../../store"

const ActionButton = ({ text }: { text: string }) => {

    const Wrapper = motion(Chakra.Flex)
    const imgSrc = `/generator/${text}.svg`;
    const dispatch = Redux.useAppDispatch();
    const onClick = () => { { dispatch(Redux.setAction(text)) } }

    const motionAnimationProps = {
        whileHover: { borderColor: 'blue', Transition: { duration: 2 } },
    }

    return (
        <Wrapper{...motionAnimationProps} role="button" boxShadow={'md'} borderRadius={5} border='transparent 2px solid' onClick={onClick} my={1} py={2} bg="gray.50" pl={5} >
            <Image src={imgSrc} alt={text} width={15} height={15} />
            <Chakra.Text ml={5} textTransform="capitalize" fontSize={'.8rem'} fontWeight={500}>{text}</Chakra.Text>
        </Wrapper >
    )
}

export default ActionButton