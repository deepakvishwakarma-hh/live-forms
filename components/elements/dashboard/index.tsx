import Main from "./main";
import Aside from "./aside";
import style from "./dashboard.module.scss"

const Dashboard = ({ arr, data }: any) => {



    return (
        <div className={style.wrapper}>

            <Aside />

            <Main arr={arr} data={data} />

        </div>
    )
};
export default Dashboard