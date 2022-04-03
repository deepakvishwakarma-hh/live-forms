// non flexible component --

import Image from "next/image";
import { motion } from 'framer-motion'

interface prop {
    name: string;
    onClick: any;
}

const Button = ({ name, onClick }: prop) => {

    const animatingProperties = {
        initial: {}, // ff
        animate: {}, // fs
        whileHover: { border: '1px solid #000', },
    }

    return (
        <motion.button
            name={name}
            onClick={() => { onClick(name) }}
            {...animatingProperties}>
            <div>
                <Image
                    width={20}
                    height={20}
                    alt={"svg"}
                    src={`/generator/${name}.svg`} />
            </div>

        </motion.button>
    )
}


export default Button;