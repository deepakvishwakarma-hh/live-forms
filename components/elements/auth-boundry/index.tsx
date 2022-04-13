/* eslint-disable react-hooks/exhaustive-deps */

interface prop {
    children: any;
}
import { useLayoutEffect, useState } from 'react'

import Aleart from './aleart';

const Boundry = ({ children }: prop) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    useLayoutEffect(() => {

        if (!localStorage.getItem('token')) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
        }
    })

    if (isLoggedIn) {
        return <> {children} </>
    }
    return <Aleart />
}


export default Boundry