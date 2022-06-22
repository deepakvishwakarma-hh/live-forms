import * as Chakra from "@chakra-ui/react"
import * as Redux from "../../../../../store"
import { CloseButton } from "@chakra-ui/close-button"

const ProdcutionObstacle = () => {

    const dispatch = Redux.useAppDispatch()
    const isTrue: any = Redux.useAppSelector(store => store.alearts.formCreated)
    const isThereAnyObstacle = isTrue.length !== 0;

    const onCloseHandler = () => {
        dispatch(Redux.alerts({ type: 'formCreated', payload: false }))
    }

    return (
        <Chakra.Center p={3} position="fixed" top={0} left={0} bg={'blackAlpha.500'} width={'100%'} height={'100%'} zIndex={9999}>

            <Chakra.Flex minW={400} maxW={400} p={5} flexDir={'column'} bg="white" borderRadius={10}>

                {isThereAnyObstacle && <>
                    <Chakra.Flex flexDir={'column'}>
                        <Chakra.Text fontSize={18} textAlign="center" fontWeight={600} py={5}>Production Obstacles</Chakra.Text>
                    </Chakra.Flex >

                    <Chakra.Flex flexDir={'column'} bg="red.50" p={5}>
                        {
                            isTrue.map((obs: string, index: number) => <Chakra.Text fontSize={'.9rem'} fontWeight={500} color="red" key={index} fontFamily="monospace !important"> ⌀ {obs}</Chakra.Text>)
                        }
                    </Chakra.Flex>
                </>}

                {!isThereAnyObstacle && <>
                    <Chakra.Flex flexDir={'column'}>
                        <Chakra.Text fontSize={18} textAlign="center" fontWeight={600} py={5}>Production Obstacles</Chakra.Text>
                    </Chakra.Flex >

                    <Chakra.Flex flexDir={'column'} bg="green.50" p={5}>
                        <Chakra.Text fontSize={'.9rem'} fontWeight={500} color="green" fontFamily="monospace !important">✓  No Obstacle Detected  </Chakra.Text>
                        <Chakra.Text fontSize={'.9rem'} fontWeight={500} color="green" fontFamily="monospace !important">✓  Deployed, see in dashboard  </Chakra.Text>
                    </Chakra.Flex>

                </>}

                <Chakra.Button onClick={onCloseHandler} _hover={{ opacity: .8 }} color="black" fontSize={14} mt={5}>
                    <CloseButton /> </Chakra.Button>
            </Chakra.Flex>

        </Chakra.Center >
    )
}
export default ProdcutionObstacle
