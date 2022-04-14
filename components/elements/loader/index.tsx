import style from "./loader.module.scss"
import { motion } from "framer-motion"
const Loader = () => {

    const animation = {
        animate: {
            rotate: [0, 360],
            transition: {
                duration: .5,
                repeat: Infinity
            }
        },

    }
    return (
        <div className={style.wrapper}>

            <svg width="80" height="30" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="50" fill="white" />
                <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
                <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
            </svg>

            <motion.div {...animation} className={style.loader}>
            </motion.div>

        </div>
    )
}

export default Loader;