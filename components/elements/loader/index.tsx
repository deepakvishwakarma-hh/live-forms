interface prop {
    fullpage?: boolean
}
import { motion } from "framer-motion"
import { Center, Box } from "@chakra-ui/react";

const Loader = ({ fullpage }: prop) => {

    const Spinner = motion(Box)

    const animation = {
        animate: {
            rotate: [0, 360],
            transition: {
                duration: .5,
                repeat: Infinity
            }
        },
    }

    return (
        <Center pos={(fullpage) ? 'fixed' : "static"} top={0} left={0} w="100%" h="100%" bg="white" zIndex={999}>

            <Spinner {...animation} pos="absolute" w="50px" h="50px" borderRadius="50%" border="2px transparent solid" borderLeftColor="black" borderRightColor="black" >
            </Spinner>

        </Center>
    )
}

export default Loader;





