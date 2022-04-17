
interface prop {
    action: string
}

import Image from "next/image"

const Marker = ({ action }: prop) => <div >
    <Image src={`/generator/${action}.svg`} alt="none" width={15} height={15} />
</div>

export default Marker
