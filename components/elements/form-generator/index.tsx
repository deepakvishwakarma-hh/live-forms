
import Aside from "./aside";
import Main from "./main";
import * as Alerts from "../alerts";
import Inspector from "../inspector";
import { Grid } from "@chakra-ui/react";

const FormGenerator = () => {
    return (
        <Grid gridTemplate={' 100vh / 100px auto 300px'}>
            <Aside />
            <Main />
            <Inspector />
            <Alerts.formCreated />
        </Grid>
    )
}

export default FormGenerator