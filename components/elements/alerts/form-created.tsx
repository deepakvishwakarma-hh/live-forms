import style from "./alerts.module.scss";
import { motion } from "framer-motion";
import { useAppSelector } from "../../../state-store";

const FormCreated = () => {

    const { formCreated } = useAppSelector(state => state.alearts);

    const animation = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: [1, 0],
            transition: {
                delay: 3
            }
        }
    }

    if (!formCreated) {
        return null
    }

    return (
        <motion.div {...animation} className={style.wrapper}>
            <div className={style.content}>

                <h1> <i>🎉</i> Now Live </h1>
                <p>Show analytics on dashboard</p>

            </div>
        </motion.div>
    )
}

export default FormCreated;