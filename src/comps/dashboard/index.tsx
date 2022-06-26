import Main from "./comps/main"
import Aside from "./comps/aside";
import { Grid } from "@chakra-ui/react";

export interface prop {
    userCreatedSurveyIds: string[],
    response: any
}

const Dashboard = ({ userCreatedSurveyIds, response }: prop) => {

    const mainPayload = { userCreatedSurveyIds, response }

    return (
        <Grid gridTemplate={'100vh / 250px auto'}>
            <Aside />
            <Main {...mainPayload} />
        </Grid>
    )
};
export default Dashboard