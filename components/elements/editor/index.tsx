import Main from "./comps/main"
import * as Chakra from "@chakra-ui/react"
const Editor = () => <Chakra.Grid pos="fixed" top={0} left={0} width={'100%'} h="100%" gridTemplate={" auto /  auto"} > <Main></Main> </Chakra.Grid>
export default Editor 