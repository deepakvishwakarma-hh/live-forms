import style from "./style.module.scss";
import HireDeveloperButton from "../../micros/HireDeveloperButton";
import Image from "next/image";

const Intro = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <p>great place to create forms and store data</p>
                <h1>Create Simple, Free, Fast Forms for Surveys</h1>
                <h5>Advanced Embended Dashboard for form anaysis.</h5>
                <HireDeveloperButton />
            </div>
            <div className={style.content}>

                <Image layout="fill" src="/illustration.svg" width={100} height={100} alt="illustration made by deepak" />

            </div>
        </div>
    )
}

export default Intro