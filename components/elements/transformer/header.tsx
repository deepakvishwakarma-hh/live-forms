interface prop {
    data: { title: string, subtitle: string },
    isLive?: boolean | undefined
}

import { Flex, Text } from "@chakra-ui/react"
import { textResponsiveSizes } from "../../../styles/style"

const Header = ({ data }: prop) => {
    const { title, subtitle } = data
    const elementProperties = {
        wrapper: {
            my: "4",
            py: '5',
            px: "5",
            maxW: ["100%", "360px", "360px", "360px"],
            borderRadius: "10",
            flexDirection: "column",
        },
    }
    return (
        <Flex {...elementProperties.wrapper as any}>
            <Text fontWeight={'bold'} fontSize={25}>{title}</Text>
            <Text color="grey" fontSize={textResponsiveSizes.sm}>{subtitle}</Text>
        </Flex>
    )
}
export default Header;