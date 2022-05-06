import { Grid, Flex } from "@chakra-ui/react";
import useDashboard from "../../../hooks/useDashboard";
import Router from "next/router";

const Aside = () => {

    const dashboard = useDashboard();

    return (
        <Grid gridTemplate={'80px auto  / auto'} >

            <Flex onClick={() => { Router.push('/') }} alignItems={'center'} flex={1}>

                <svg width="80" height="30" viewBox="0 0 100 50" fill="none" >
                    <rect width="100" height="100" fill="transparent" />
                    <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
                    <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
                </svg>
            </Flex>

            <Flex flexDir="column" px={4} flex={3} justifyContent="end" alignItems={'center'} pb={10} >

                <Flex onClick={() => { dashboard.logout() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                </Flex>

            </Flex >

        </Grid>
    )
}

export default Aside;
