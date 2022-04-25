import Router from "next/router"
import useGenerate from "../../../hooks/useGenerate"
import { Flex, Button, Text, useToast, useClipboard } from "@chakra-ui/react";

interface prop {
    DB: any
}

const Top = ({ DB }: prop) => {

    const id = Router.query.id

    const generate = useGenerate()

    const toast = useToast();

    const { hasCopied, onCopy } = useClipboard(JSON.stringify(DB));

    const onCopyJSON = () => {
        onCopy()

        toast({
            description: "Database JSON is Copied to your Clipboard",
            status: 'success',
            duration: 500,
            isClosable: true,
        })
    }
    const onRestoreDatabase = () => {

        const permission = confirm('Do you really wanna to Restore Result. All data will be erased');

        if (permission) {

            generate.restoreDB(id as string)

            toast({
                description: "Database Restored",
                status: 'success',
                duration: 500,
                isClosable: true,
            })
        }
    }
    const onDeleteDatabase = () => { }

    const buttonStyleProperties = {
        mx: 2,
        size: 'sm',
        color: 'white',
        bg: "blackAlpha.800",
        _hover: { opacity: .8 }
    }

    const buttonTextStyleProperties = {
        ml: 2,
        fontSize: 12,
        fontWeight: 400
    }

    return (
        <Flex mb={10}>
            <Button
                onClick={onCopyJSON}
                {...buttonStyleProperties}>

                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                </svg>

                <Text {...buttonTextStyleProperties}>
                    {hasCopied ? 'Copied' : 'Copy'} JSON
                </Text>

            </Button>
            <Button
                {...buttonStyleProperties}
                onClick={onRestoreDatabase}  >

                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>

                <Text {...buttonTextStyleProperties}>
                    Restore DB
                </Text>

            </Button>

            <Button
                {...buttonStyleProperties}
                onClick={onDeleteDatabase} >

                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>

                <Text {...buttonTextStyleProperties}>
                    Delete DB
                </Text>

            </Button>

        </Flex>
    )
}
export default Top;