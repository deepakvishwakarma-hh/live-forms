/* eslint-disable react-hooks/exhaustive-deps */

import Router from "next/router";
import { Grid, Flex, Button } from "@chakra-ui/react";

const Aside = () => {

    return (
        <Grid gridTemplate={'80px auto 100px / auto'} bg="black">

            <Flex alignItems={'center'}>

                <svg width="90" height="40" viewBox="0 0 100 50" fill="none" >
                    <rect width="100" height="100" fill="transparent" />
                    <rect x="22" y="14" width="56" height="7" rx="3.5" fill="white" />
                    <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="white" />
                </svg>

            </Flex>

            <Flex flexDir="column" px={4} >

                <Button onClick={() => { Router.push('/editor') }} >+</Button>

            </Flex >

        </Grid>
    )
}


export default Aside;