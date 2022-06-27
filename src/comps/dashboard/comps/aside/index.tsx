import * as Chakra from "@chakra-ui/react";
import Router from "next/router";

const Aside = () => {
    return (
        <Chakra.Grid gridTemplate={'100px auto  / auto'}  >
            <Chakra.Flex alignItems={'center'} ml={2} mt={3} fontSize={".9rem"}>
                <svg width="80" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="50" fill="transparent " />
                    <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
                    <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
                </svg>
            </Chakra.Flex>

            <Chakra.Flex flexDir="column" alignItems={'center'} px={4} flex={3} justifyContent="end" pb={10} >
                <Chakra.Center onClick={() => Router.push('/editor')} overflow={'hidden'} flexDir={'column'} mb={5} boxShadow="md" bg="white" w="100%" borderRadius={5}>
                    <Chakra.Flex h="150px" bgSize={'cover'} w="100%" bgPos={'center'} bgImage={'https://cdn.dribbble.com/users/3223219/screenshots/14629976/media/548778a1157f7ad4180484c56bc52fc5.png?compress=1&resize=450x338&vertical=top'}>
                    </Chakra.Flex>
                    <Chakra.Text p={2} fontWeight={400} fontSize={13} color="gray">
                        Liveforms Editor, Survey designer
                    </Chakra.Text>
                    <Chakra.Button bg="#2CBFED" color="white" py={4} w="90%" mb={2} size="xs" > Create Survey → </Chakra.Button>
                </Chakra.Center>

                <Chakra.Center onClick={() => Router.push('https://github.com/deepakvishwakarma-hh/live-forms')} overflow={'hidden'} flexDir={'column'} mb={5} boxShadow="md" bg="white" w="100%" borderRadius={5}>
                    <Chakra.Flex h="150px" bgSize={'cover'} w="100%" bgPos={'center'} bgImage={'https://cdn.dribbble.com/users/1685735/screenshots/6922064/media/d88dba3361cd95384498305cfdcc0a51.png?compress=1&resize=450x338&vertical=top'}>
                    </Chakra.Flex>
                    <Chakra.Text p={2} fontWeight={400} fontSize={13} color="gray">
                        Liveforms Open-source, Github redirect
                    </Chakra.Text>
                    <Chakra.Button bg="#FD9B00" color="white" py={4} w="90%" mb={2} size="xs" >Contribute → </Chakra.Button>
                </Chakra.Center>

            </Chakra.Flex >

        </Chakra.Grid >
    )
}

export default Aside;
