import style from "./survey.module.scss";


const SurveyFallback = () => {
    return (
        <div className={style.fallback}>
            <h1> 😑 </h1>
        </div>
    )
}
export default SurveyFallback