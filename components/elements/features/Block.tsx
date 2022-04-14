
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
                <Image width={150} height={150} alt="img" src={url} />
            </div>

            <div className={style.texts}>
                <h1>{topic}</h1>

                <p>{paragraph}</p>
            </div>

        </div>
    )
}

export default Block