import Image from "next/image";
import { motion } from 'framer-motion'

interface prop {
    children: any;
    name: string;
    onClick: any;
}

const Button = ({ children, name, onClick }: prop) => {


    const animatingProperties = {
        initial: {},
        animate: {},
        whileHover: {
            border: '1px solid #000',
        },

    }


    return (
        <motion.button {...animatingProperties} name={name} onClick={() => { onClick(name) }}>
            <div>
                <Image src={`/generator/${name}.svg`} width={20} height={20} alt={"svg"} />
            </div>

        </motion.button>
    )
}


export default Button;