import { Box, Text } from "@chakra-ui/react"

const Fallback = () => {
    return (
        <Box bg="red.100" p={2} border="red 1px solid" borderRadius={5}>
            <Text fontSize={12}>Click <b>Action-buttons</b> to add new Input Element</Text>
        </Box >
    )
}
export default Fallback