import { Flex } from "@chakra-ui/react";

const Header = () => (

    <Flex id="header" alignItems="center" justifyContent={'space-between'} my={5}>
        <svg width="100" height="50" viewBox="0 0 100 50" fill="none">
            <rect width="100" height="50" fill="white" />
            <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
            <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
        </svg>
        <Flex display={['none', 'flex']}></Flex>
    </Flex>
)

export default Header;

