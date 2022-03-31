import style from "./style.module.scss";
import HireDeveloperButton from "../../micros/HireDeveloperButton";
import Image from "next/image";

const Intro = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <p>great place to hire remote developers</p>
                <h1>Hire vetted remote developers</h1>
                <h5>Work with elite, pre-vetted developers assigned to you in 24 hours. With fixed transparent pricing, no long-term contracts, and a 7-day risk-free guarantee — you can start building what you imagined in no time.</h5>
                <HireDeveloperButton />

            </div>
            <div className={style.content}>

                <Image layout="fill" src="/illustration.svg" width={100} height={100} alt="illustration made by deepak" />

            </div>
        </div>
    )
}

export default Intro