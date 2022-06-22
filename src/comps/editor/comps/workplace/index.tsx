import * as Chakra from "@chakra-ui/react";
import AsideLeft from "./comps/aside-left";
import AsideRight from "./comps/aside-right";
import Playground from "./comps/playground";
const Main = () => <Chakra.Grid gridTemplate={"100% / 300px auto 300px"}> <AsideLeft /> <Playground /> <AsideRight /></Chakra.Grid >
export default Main 