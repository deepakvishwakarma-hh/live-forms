import Router from "next/router";
import * as Chakra from "@chakra-ui/react"
import * as Redux from "../../../../../../../state-store"
import useProduce from "../../../../../../hooks/useProduce";


const Top = () => {

    const experimenatal = useProduce()

    const { title, subtitle } = Redux.useAppSelector(store => store.__generator.__meta.__header);

    const onProduceButtonHandler = () => { experimenatal.Produce() };

    const dispatch = Redux.useAppDispatch()
    const currHeaderBoxCondition = Redux.useAppSelector(store => store.__generator.__headerBox);

    //  functions 
    const onTitleClickHandler = () => { dispatch(Redux.toggleHeaderBox(!currHeaderBoxCondition)) }

    const onResetClickHandler = () => {
        if (localStorage !== undefined) {
            localStorage.removeItem('editor')
            Router.reload()
        }
    }
    const buttonStyle = {
        m: 2,
        mx: 2,
        px: 5,
        role: 'button',
        borderRadius: 5,
        bg: "black",
        py: 2,
    }

    const buttonTextStyle = {
        ml: 1,
        color: 'white',
        fontSize: ".75rem",
        letterSpacing: .5,
        px: 2
    }


    return (

        <Chakra.Grid gridTemplate={'100% / auto'} bg="gray.500">


            <Chakra.Grid bg="#EFEFEF" gridTemplate={"100% / auto auto"}  >

                <Chakra.Flex px={5} alignItems={'center'} onClick={onTitleClickHandler} overflow="auto">

                    <Chakra.Text fontSize={'1rem'} ml={5} color="black" borderBottom={'1px gray solid'}>{title} <sup style={{ color: 'blue' }}>Title</sup></Chakra.Text>

                </Chakra.Flex>

                <Chakra.Flex px={2} justifyContent={"end"} alignItems="center"  >
                    <Chakra.Flex >

                        <Chakra.Center {...buttonStyle as any} onClick={onTitleClickHandler}  >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <Chakra.Text {...buttonTextStyle as any}>Title Sub-title</Chakra.Text>
                        </Chakra.Center>


                        <Chakra.Center  {...buttonStyle as any} onClick={onResetClickHandler} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                            </svg>
                            <Chakra.Text {...buttonTextStyle as any}>Reset Survey</Chakra.Text>
                        </Chakra.Center>

                        <Chakra.Center  {...buttonStyle as any} bg="blue" px={10} onClick={onProduceButtonHandler}  >

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z" />
                                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                            </svg>

                            <Chakra.Text {...buttonTextStyle as any}>Produce</Chakra.Text>
                        </Chakra.Center>

                    </Chakra.Flex>

                </Chakra.Flex>
            </Chakra.Grid >
        </Chakra.Grid>

    )
}
export default Top 