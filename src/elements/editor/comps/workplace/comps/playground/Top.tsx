/* eslint-disable react-hooks/rules-of-hooks */
import Router from "next/router";
import * as Chakra from "@chakra-ui/react"
import * as Redux from "../../../../../../../store"
import useProduce from "../../../../../../hooks/useProduce";

const Top = () => {
    const produce = useProduce()
    const dispatch = Redux.useAppDispatch()
    const onProduceButtonHandler = () => { produce.Produce() };
    const { title } = Redux.useAppSelector(store => store.__generator.__meta.__header);
    const customArrLength = Redux.useAppSelector(store => store.__generator.__meta.__custom).length
    const currHeaderBoxCondition = Redux.useAppSelector(store => store.__generator.headerBox);
    const onTitleClickHandler = () => { dispatch(Redux.toggleHeaderBox(!currHeaderBoxCondition)) }
    const onResetClickHandler = () => {
        if (localStorage !== undefined) {
            localStorage.removeItem('editor')
            Router.reload()
        }
    }
    const isTimeToDisebledResetButton = customArrLength == 0
    const tooltipStyle = {
        hasArrow: true, bg: "white", color: 'black', fontWeight: 500, fontSize: 12, letterSpacing: 1, p: '.4rem 1rem', borderRadius: 5,
    }
    return (
        <Chakra.Grid gridTemplate={'100% / auto'} bg="gray.500">
            <Chakra.Grid bg="#EFEFEF" gridTemplate={"100% / auto auto"}  >
                <Chakra.Flex px={5} alignItems={'center'} overflow="auto">
                    <Chakra.Text fontSize={'1rem'} ml={5} color="black" borderBottom={'1px gray solid'}>{title}</Chakra.Text>
                </Chakra.Flex>
                <Chakra.Flex px={2} justifyContent={"end"} alignItems="center"  >
                    <Chakra.Flex >
                        <Chakra.Tooltip {...tooltipStyle} label="Title & Sub-title">
                            <Chakra.Button onClick={onTitleClickHandler} mx={2} fontWeight={500} fontSize={15} bg="white" boxShadow={'md'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm-5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm.79-5.373c.112-.078.26-.17.444-.275L3.524 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282c.024-.203.065-.37.123-.498a1.38 1.38 0 0 1 .252-.37 1.94 1.94 0 0 1 .346-.298zm2.167 0c.113-.078.262-.17.445-.275L5.692 6c-.122.074-.272.17-.452.287-.18.117-.35.26-.51.428a2.425 2.425 0 0 0-.398.562c-.11.207-.164.438-.164.692 0 .36.072.65.217.873.144.219.385.328.72.328.215 0 .383-.07.504-.211a.697.697 0 0 0 .188-.463c0-.23-.07-.404-.211-.521-.137-.121-.326-.182-.568-.182h-.282a1.75 1.75 0 0 1 .118-.492c.058-.13.144-.254.257-.375a1.94 1.94 0 0 1 .346-.3z" />
                            </svg></Chakra.Button>
                        </Chakra.Tooltip>
                        <Chakra.Tooltip {...tooltipStyle} label="Reset to default survey">
                            <Chakra.Button isDisabled={isTimeToDisebledResetButton} onClick={onResetClickHandler} mx={2} fontWeight={500} fontSize={15} bg="white" boxShadow={'md'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                                    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                                </svg>   </Chakra.Button>
                        </Chakra.Tooltip>
                        <Chakra.Tooltip {...tooltipStyle} label="Publish Survey">
                            <Chakra.Button onClick={onProduceButtonHandler} mx={2} px={10} fontWeight={500} fontSize={15} bg="blue" boxShadow={'md'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                </svg> </Chakra.Button>
                        </Chakra.Tooltip>
                    </Chakra.Flex>
                </Chakra.Flex>
            </Chakra.Grid >
        </Chakra.Grid>
    )
}
export default Top 