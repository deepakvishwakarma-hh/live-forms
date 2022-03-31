import Link from "next/link"
import style from "./style.module.scss";

interface propType {
    href: string,
    label: string
}

const CusLink = ({ href, label }: propType) => {
    return (
        <Link href={href} passHref>
            <h5 className={style.link}>{label}</h5>
        </Link>
    )
}

export default CusLink