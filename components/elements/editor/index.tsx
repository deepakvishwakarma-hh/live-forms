import Top from "./comps/top"
import Main from "./comps/main"
import * as Chakra from "@chakra-ui/react"

const Editor = () => {
    return (
        <Chakra.Grid pos="fixed" top={0} left={0} width={'100%'} h="100%" gridTemplate={"100px auto /  auto"} >
            <Top></Top>
            <Main></Main>
        </Chakra.Grid>
    )
}
export default Editor 