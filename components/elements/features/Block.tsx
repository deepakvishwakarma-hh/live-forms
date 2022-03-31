
import style from "./style.module.scss";
import Image from 'next/image'

interface propType {
    topic: string,
    paragraph: string,
    url: string
}

const Block = ({ topic, paragraph, url }: propType) => {
    return (
        <div className={style.block}>

            <div className={style.image_wrapper}>
                <Image layout="fill" alt="img" src={url} />
            </div>

            <h1>{topic}</h1>

            <p>{paragraph}</p>

        </div>
    )
}

export default Block