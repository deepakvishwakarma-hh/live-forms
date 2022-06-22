import Block from "./Block";
import { Box } from "@chakra-ui/react";

const Features = () => {
    return (
        <Box pt={50} >
            <Block topic="Realtime Surveys" paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab eum consequuntur porro quia omnis, ad maxime dolore laboriosam rem earum asperiores aliquam id, fugit officia at, dignissimos unde laudantium. " url="/realtime.svg" />
            <Block topic="Perfact Analysis" paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab eum consequuntur porro quia omnis, ad maxime dolore laboriosam rem earum asperiores aliquam id, fugit officia at, dignissimos unde laudantium.." url="/analysis.svg" />
            <Block topic="Dashboard Support " paragraph=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ab eum consequuntur porro quia omnis, ad maxime dolore laboriosam rem earum asperiores aliquam id, fugit officia at, dignissimos unde laudantium." url="/dashboard.svg" />
        </Box>
    )
}

export default Features