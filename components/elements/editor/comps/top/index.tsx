import Top from "./comps/Top"
import Bottom from "./comps/Bottom"
import * as Chakra from "@chakra-ui/react"

const TopBar = () => {
    return (
        <Chakra.Grid gridTemplate={'50% 50% / auto'} bg="gray.500">
            <Top />
            <Bottom />
        </Chakra.Grid>
    )
}
export default TopBar 