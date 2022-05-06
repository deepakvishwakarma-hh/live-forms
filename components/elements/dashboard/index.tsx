import Main from "./comps/main";
import Loader from "../loader";
import Aside from "./comps/aside";
import { Grid } from "@chakra-ui/react";

const Dashboard = ({ arr, data }: any) => {

    const conditinallyRenderElement = (data) ? <Main arr={arr} data={data} /> : <Loader />

    return (
        <Grid gridTemplate={'100vh / 200px auto'}>
            <Aside />
            {conditinallyRenderElement}
        </Grid>
    )
};
export default Dashboard