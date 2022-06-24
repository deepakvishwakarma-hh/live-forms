import { Flex, Center, Text, Box, Button } from "@chakra-ui/react"
import Router from "next/router"
const fillVarientHover = { border: '2px black solid', bg: "white", color: "black", transition: ' all 1s', }
const outlineVarientHover = { border: '2px transparent solid', bg: "black", color: "white", transition: ' all 1s', }
const LaunchApp = () => Router.push('/dashboard')
const contribute = () => Router.push('https://github.com/deepakvishwakarma-hh/live-forms')

const Index = () => {
    return (
        <Box>

            <Flex h={'100px'} px={'2rem'} alignItems={'center'}>
                <Flex alignItems={'center'} flex={1} justifyContent="center">
                    <svg width="80" height="30" viewBox="0 0 100 50" fill="none">
                        <rect width="100" height="50" fill="transparent" />
                        <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
                        <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
                    </svg>
                </Flex>
                <Flex alignItems={'center'} flex={1} justifyContent="center">
                    <Button fontSize={12} mx={2} borderRadius={20} bg="white" color="black" fontWeight={500} >Discover</Button>
                    <Button fontSize={12} mx={2} borderRadius={20} bg="white" color="black" fontWeight={500} >Learn </Button>
                    <Button fontSize={12} mx={2} borderRadius={20} bg="white" color="black" fontWeight={500} >Invite Friends</Button>
                    <Button fontSize={12} mx={2} borderRadius={20} bg="white" color="black" fontWeight={500} >Contribute</Button>
                </Flex>
                <Flex alignItems={'center'} flex={1} justifyContent="center">
                    <Button onClick={LaunchApp} px={10} fontSize={13} borderRadius={20} bg="black" color="white" fontWeight={500} border='2px transparent solid' _hover={fillVarientHover}>Launch app →</Button>
                </Flex>
            </Flex>
            <Center h="500px">
                <Flex maxW="700px" flexDir={'column'} justifyContent={'center'}>
                    <Text textAlign={'center'} fontSize={13} color="gray">Open source web tool for everyone </Text>
                    <Text textAlign={'center'} my={8} fontSize={40} fontWeight={1000}> Powerfull &  Free Tool for <br /> Develop , Deploy , Analyse  Forms.</Text>
                    <Text textAlign={'center'} fontSize={13} color="gray">The platform enables users to manage and analyse their form and form-database with greater transparency in a permissionless environment with a simplified and straightforward interface. Free for all  makes it possible for everyday people to survey in a familiar environment but with decentralization at its core.</Text>
                    <Flex justifyContent={'center'} mt={5}>
                        <Button onClick={LaunchApp} px={10} mr={1} fontSize={13} borderRadius={20} bg="black" color="white" fontWeight={500} border={'2px transparent solid'} _hover={fillVarientHover}>Launch app →</Button>
                        <Button onClick={contribute} fontSize={13} ml={1} px={10} borderRadius={20} bg="white" color="black" border={'2px black solid'} fontWeight={500} _hover={outlineVarientHover} >Contribute</Button>
                    </Flex>
                </Flex>
            </Center>
            <Center>
                <Box bgImage={'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'} bgRepeat="no-repeat" bgPos={'center'} bgSize="cover" pos="relative" w="80%" h="800px" borderRadius={'1rem'} overflow="hidden" >
                </Box>
            </Center>
            <Box mt={'5rem'} bg="" pt={'2rem'}  >
                <Text textAlign={'center'} my={2} fontSize={40} fontWeight={500}>Get Started Fast.</Text>
                <Text textAlign={'center'} fontSize={13} color="gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magni animi qui aut .</Text>
                <Flex px={"10rem"} h="300px">
                    <Center flex={5} bg='white' borderRadius={10} p={5} mx={5} flexDir='column'>
                        <Text fontWeight={400} fontSize={25} mb={5} >Develop</Text>
                        <Text fontSize={12} color="gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure excepturi labore molestiae illum maiores amet, dolore nisi blanditiis aperiam. Lorem ipsum dolor sit amet.</Text>
                    </Center>
                    <Center flex={5} bg='white' borderRadius={10} p={5} mx={5} flexDir='column'>
                        <Text fontWeight={400} fontSize={25} mb={5} >Deploy</Text>
                        <Text fontSize={12} color="gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure excepturi labore molestiae illum maiores amet, dolore nisi blanditiis aperiam. Lorem ipsum dolor sit amet.</Text>
                    </Center>
                    <Center flex={5} bg='white' borderRadius={10} p={5} mx={5} flexDir='column'>
                        <Text fontWeight={400} fontSize={25} mb={5} >Analyse</Text>
                        <Text fontSize={12} color="gray">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure excepturi labore molestiae illum maiores amet, dolore nisi blanditiis aperiam. Lorem ipsum dolor sit amet.</Text>
                    </Center>
                </Flex>
            </Box>
            <Flex justifyContent={'flex-end'} h="100px" bg='#000000'>
                <Center>
                    <svg width="80" height="100" viewBox="0 0 100 50" fill="none">
                        <rect width="100" height="50" fill="transparent" />
                        <rect x="22" y="14" width="56" height="7" rx="3.5" fill="white" />
                        <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="white" />
                    </svg>
                </Center>
            </Flex>

        </Box >
    )
}

export default Index