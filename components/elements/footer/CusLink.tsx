import Link from "next/link"
import { Text } from "@chakra-ui/react"
interface propType {
    href: string,
    label: string
}

const CusLink = ({ href, label }: propType) => {
    return (
        <Link href={href} passHref>
            <Text mx={5} >{label}</Text >
        </Link>
    )
}

export default CusLink