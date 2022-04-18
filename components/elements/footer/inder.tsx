import CusLink from "./CusLink";
import { Flex } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Flex id='footer' justifyContent={'space-between'} bg="white" my={10}>

            <svg width="100" height="50" viewBox="0 0 100 50" fill="none">
                <rect width="100" height="50" fill="white" />
                <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
                <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
            </svg>

            <Flex alignItems={'center'}>
                <CusLink href="hii" label="Services"></CusLink>
                <CusLink href="hii" label="Report Issue"></CusLink>
            </Flex>
        </Flex>
    )
}

export default Footer