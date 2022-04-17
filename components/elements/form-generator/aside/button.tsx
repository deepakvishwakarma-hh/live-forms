import Image from "next/image";
import { Button, Flex } from '@chakra-ui/react'
interface prop {
    name: string;
    onClick: any;
}

const _Button = ({ name, onClick }: prop) => {



    return (
        <Button
            _hover={{ border: 'none' }}
            my={3}
            bg={'none'}
            name={name}
            onClick={() => { onClick(name) }}>
            <Flex>
                <Image
                    width={20}
                    height={20}
                    alt={"svg"}
                    src={`/generator/${name}.svg`} />
            </Flex>

        </Button >
    )
}


export default _Button;