interface prop {
    value: any,
}
import { textResponsiveSizes } from "../../../styles/style";
import { Flex, Text, Input, Textarea, Select } from "@chakra-ui/react";

const Constructor = ({ value }: prop) => {

    const { action, name, placeholder, options, paragraph } = value;

    const elementProperties = {
        wrapper: {
            my: "4",
            py: '5',
            px: "5",
            bg: 'white',
            maxW: ["300px", "360px", "360px", "360px"],
            minW: ["300px", "360px", "360px", "360px"],
            borderRadius: "10",
            flexDirection: "column",
            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        },
        title: {
            py: '0',
            fontSize: '17',
            fontWeight: '600',
            textTransform: 'capitalize',
        },
        paragraph: {
            py: "2",
            color: 'gray    ',
            fontSize: textResponsiveSizes.sm,
        },
        input: {
            name,
            size: 'sm',
            required: true,
            bg: 'gray.100',
            borderRadius: '6',
        }
    }


    if (action == 'input') {
        return <Flex {...elementProperties.wrapper as any}>
            <Text {...elementProperties.title as any}>{name}</Text>
            <Text {...elementProperties.paragraph as any}>{paragraph}</Text>
            <Input placeholder={placeholder}  {...elementProperties.input as any} />
        </Flex>
    }
    else if (action == 'textarea') {
        return <Flex {...elementProperties.wrapper as any}>
            <Text {...elementProperties.title as any}>{name}</Text>
            <Text {...elementProperties.paragraph as any}>{paragraph}</Text>
            <Textarea placeholder={placeholder}  {...elementProperties.input as any} />
        </Flex>
    }
    else {
        const optMaps = options?.map((value: string, index2: number) => {
            return <option key={index2}>{value}</option>
        })
        return <Flex {...elementProperties.wrapper as any}>
            <Text {...elementProperties.title as any}>{name}</Text>
            <Text {...elementProperties.paragraph as any}>{paragraph}</Text>
            <Select  {...elementProperties.input as any} > {optMaps} </Select>
        </Flex>
    }
}
export default Constructor

            // const isLive = (path == '/forms/[id]');x