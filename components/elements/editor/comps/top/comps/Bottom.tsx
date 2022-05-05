import Router from "next/router"
import * as Chakra from "@chakra-ui/react"
import * as Redux from "../../../../../../state-store"

const Bottom = () => {

    const dispatch = Redux.useAppDispatch()
    const currHeaderBoxCondition = Redux.useAppSelector(store => store.__generator.__headerBox);

    //  functions 
    const onTitleClickHandler = () => { dispatch(Redux.toggleHeaderBox(!currHeaderBoxCondition)) }

    const onAspectClickHandler = () => {
        if (document !== undefined) { }
        document.documentElement.requestFullscreen().catch((e: any) => { console.log(e) })
    }

    const onResetClickHandler = () => {
        if (localStorage !== undefined) {
            localStorage.removeItem('editor')
            Router.reload()
        }
    }

    const buttonStyle = {
        m: 2,
        mx: 2,
        px: 2,
        role: 'button',
        borderRadius: 5,
        bg: "whiteAlpha.300",
        // border: "1px whitesmoke solid ",
    }

    const buttonTextStyle = {
        ml: 2,
        color: 'white',
        fontSize: ".7rem",
        letterSpacing: .5,
    }

    return (
        <Chakra.Grid bg="whitesmoke">
            <Chakra.Flex bg="black">

                <Chakra.Center {...buttonStyle as any} onClick={onTitleClickHandler} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <Chakra.Text {...buttonTextStyle as any}>Identification</Chakra.Text>
                </Chakra.Center>

                <Chakra.Center  {...buttonStyle as any} onClick={onAspectClickHandler}  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 16 16">
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                        <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
                    </svg>
                    <Chakra.Text {...buttonTextStyle as any}>Aspect Ratio</Chakra.Text>
                </Chakra.Center>

                <Chakra.Center  {...buttonStyle as any} onClick={onResetClickHandler}  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                    <Chakra.Text {...buttonTextStyle as any}>Reset Meta</Chakra.Text>
                </Chakra.Center>

            </Chakra.Flex>

        </Chakra.Grid >
    )
}
export default Bottom