import * as Chakra from "@chakra-ui/react"
import AsideLeft from "./comps/aside-left"
import AsideRight from "./comps/aside-right"
import Playground from "./comps/Playground"

const Main = () => {
    return (
        <Chakra.Grid gridTemplate={"100% / 250px auto 250px"}>
            <AsideLeft />
            <Playground />
            <AsideRight />
        </Chakra.Grid>
    )
}
export default Main 