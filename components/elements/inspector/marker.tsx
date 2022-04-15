
interface prop {
    action: string
}

import Image from "next/image"
import style from "./inspector.module.scss"

const Marker = ({ action }: prop) => <div className={style.marker}>
    <Image src={`/generator/${action}.svg`} alt="none" width={15} height={15} />
</div>

export default Marker


// creating marker