/* eslint-disable react-hooks/exhaustive-deps */

interface prop {
    children: any;
}
import { useEffect, useState } from 'react'

import Aleart from './loginError';

const Boundry = ({ children }: prop) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    useEffect(() => {

        if (!localStorage.getItem('token')) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
        }
    }, [])

    if (isLoggedIn) {
        return <> {children} </>
    }

    return <Aleart />
}


export default Boundry