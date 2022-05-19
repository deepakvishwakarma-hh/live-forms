import * as Chakra from "@chakra-ui/react";
import useDashboard from "../../../../hooks/useDashboard";
import { useAppSelector } from "../../../../../state-store";

const Aside = () => {

    const dashboard = useDashboard();

    const displayName = useAppSelector(store => store?.user?.displayName)

    return (
        <Chakra.Grid gridTemplate={'100px auto  / auto'} bg="#EFEFEF" >

            <Chakra.Flex alignItems={'center'} ml={2} mt={3} fontSize={".9rem"}>

                <svg width="80" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="50" fill="transparent " />
                    <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
                    <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
                </svg>

            </Chakra.Flex>

            <Chakra.Flex flexDir="column" alignItems={'center'} px={4} flex={3} justifyContent="end" pb={10} >

                <Chakra.Avatar bg="black" name={displayName} my={4} size={'sm'}></Chakra.Avatar>

                <Chakra.Button name="logout-button" justifyContent={'center'} bg="gray.300" p={1} borderRadius={4} alignItems="center" onClick={() => { dashboard.logout() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="black" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>

                </Chakra.Button>

            </Chakra.Flex >

        </Chakra.Grid >
    )
}

export default Aside;
