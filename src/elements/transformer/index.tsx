interface prop {
    children: any,
    live?: boolean,
}
import Header from "./header"
import { useState } from "react";
import { useRouter } from "next/router"
import Constructor from "./constructor"
import { Box, Button } from '@chakra-ui/react'
import useGenerate from "../../hooks/useGenerate"
import { useAppSelector } from "../../../store"

const Transformer = ({ children, live }: prop) => {
    const gen = useGenerate()
    const router = useRouter()
    // Read Client / Create Blank Object for initialState
    const CreateBlankObject = () => {
        const T: any = {};
        children.__custom.map((V: any) => {
            (V.action !== 'dropdown')
                ? T[V.name] = ''
                : T[V.name] = (V.options) // B'cause state cannot store defult (first value)    
                    ? V.options[0]
                    : undefined
        })
        return T;
    }

    const [gatherdInformation, setGatherdInformation] = useState<any>(CreateBlankObject())
    // maps of constructed form element
    const inputElements = children?.__custom?.map((V: any, K: number) => <Constructor value={V} key={K} />)
    const header = useAppSelector(store => store.__generator.__meta.__header)
    const parentProperties = {
        // change according to the editor | live
        // change handler
        onChange: (e: any) => {
            const { name, value } = e.target;
            setGatherdInformation({ ...gatherdInformation, [name]: value })
        }
    }
    const headerCompProperties = {
        data: live ? children.__header : header, // change according to the editor | live
        isLive: live
    }
    const onSubmit = (E: any) => {
        E.preventDefault();
        gen.saveToDatabase(router.query.id as string, gatherdInformation)
    }

    return (
        <Box {...parentProperties}>
            {!live && <Header  {...headerCompProperties} />}
            <form onSubmit={onSubmit}>
                {inputElements}
                {live ? <Button w="100%" type="submit" textTransform={'uppercase'} bg="#338DFE" color="white" my={5}>post</Button> : null}
            </form>
        </Box>
    )
}
export default Transformer


