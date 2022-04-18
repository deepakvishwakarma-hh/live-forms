import useAuth from '../hooks/useAuth'
import { Button } from '@chakra-ui/react'


const HireDeveloperButton = () => {
    const Auth = useAuth()
    const onClick = (e: any) => {
        e.stopPropagation()
        Auth.loginOnHomePage()
    }

    return <Button bg="black" color={'white'} px={10} _hover={{ opacity: .9 }} onClick={onClick}>Get started</Button>
}

export default HireDeveloperButton