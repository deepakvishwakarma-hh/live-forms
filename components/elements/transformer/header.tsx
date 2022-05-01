interface prop {
    data: {
        title: string,
        subtitle: string
    },
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
            bg: 'white',
            maxW: ["100%", "360px", "360px", "360px"],
            borderRadius: "10",
            flexDirection: "column",
            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        },

    }
    return (

        <Flex {...elementProperties.wrapper as any}>

            <Text my={5} bg="orange.50" border="1px orange solid" p={2} borderRadius={5} fontSize={13} fontWeight={500} color="orange">This Header Section Only Visible for Production</Text>

            <Text fontWeight={'bold'} fontSize={25}>{title}</Text>
            <Text color="grey" fontSize={textResponsiveSizes.sm}>{subtitle}</Text>
        </Flex>

    )
}
export default Header;