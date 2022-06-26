import Head from "next/head"
import Image from "next/image"
import Router from "next/router"
import HireDeveloperButton from "../src/micros/HireDeveloperButton"
import { useWindowScrollPositions } from "../src/hooks/useWindowPositions"
import { Container, Flex, Text, Box, Heading, Center, Button } from "@chakra-ui/react"

const fillVarientHover = { border: '2px black solid', bg: "white", color: "black", transition: ' all 1s', }
const outlineVarientHover = { border: '2px transparent solid', bg: "black", color: "white", transition: ' all 1s', }

const LaunchApp = () => Router.push('/dashboard')
const contribute = () => Router.push('https://github.com/deepakvishwakarma-hh/live-forms')

const Home = () => <>
  <Head>
    <title>Live forms</title>
    <meta name="description" content="Web tools help in Develop, Deploy , Analyze forms (survey)" />
    <link rel="shortcut icon" href="/icons.svg" />
    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="keywords" content="survey, forms, google forms, free survey, survey website, form website, free analysis, survey generator, form generator" />
  </Head>

  <Container maxW='container.lg'>
    <Flex id="header" alignItems="center" justifyContent={'space-between'} my={5}>
      <svg width="100" height="50" viewBox="0 0 100 50" fill="none">
        <rect width="100" height="50" fill="white" />
        <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
        <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
      </svg>
      <Flex display={['none', 'flex']}>
        <Button onClick={LaunchApp} px={[5, 10]} fontSize={13} borderRadius={20} bg="black" color="white" fontWeight={500} border='2px transparent solid' _hover={fillVarientHover}>Launch app →</Button>
      </Flex>
    </Flex>

    <Center h="500px">
      <Flex p={[2, 0]} maxW={["400px", "600px", "700px", "700px"]} flexDir={'column'} justifyContent={'center'}>
        <Text textAlign={'center'} fontSize={13} color="gray">Open source web tool for everyone </Text>
        <Text textAlign={'center'} my={8} fontSize={[30, 40, 40, 40]} fontWeight={1000}> Powerfull &  Free Tool for <wbr /> Develop , Deploy , Analyse  Forms.</Text>
        <Text textAlign={'center'} fontSize={13} color="gray">The platform enables users to manage and analyse their form and form-database with greater transparency in a permissionless environment with a simplified and straightforward interface. Free for all  makes it possible for everyday people to survey in a familiar environment but with decentralization at its core.</Text>
        <Flex flexDir={['column', 'row']} px={[10, 0]} justifyContent={'center'} mt={5}>
          <Button onClick={LaunchApp} px={10} mr={[0, 1]} mb={[2, 0]} fontSize={13} borderRadius={20} bg="black" color="white" fontWeight={500} border={'2px transparent solid'} _hover={fillVarientHover}>Launch app →</Button>
          <Button onClick={contribute} fontSize={13} ml={[0, 1]} px={10} borderRadius={20} bg="white" color="black" border={'2px black solid'} fontWeight={500} _hover={outlineVarientHover} >Contribute</Button>
        </Flex>
      </Flex>
    </Center>












    <Box pt={50} >
      <FeatureSection topic="Realtime Surveys" paragraph="As soon as the survey is completed, you can view responses and generate reports in real-time. The dashboard offers an overview of the survey's performance and enables you to make decisions quickly. Some of the real-time insights you can get from a dashboard report are response distribution, graphs, charts and survey completion rate." url="/realtime.svg" />
      <FeatureSection topic="Perfact Analysis" paragraph="With graphs and charts, you can consume the data visually. It becomes easy to analyze how the survey participants responded and the overall pulse of the audience. As the real-time dashboards let administrators look at specific questions, they can identify general trends. Real-time survey results help when organizations do online surveys across various regions and time zones. They can watch for global trends as well as dive into individual results." url="/analysis.svg" />
      <FeatureSection topic="Dashboard Support " paragraph="See a summary of the services you use and the data saved in your Liveforms Account." url="/dashboard.svg" />
    </Box>

    <Flex id='footer' justifyContent={'space-between'} bg="white" my={10}>
      <svg width="100" height="50" viewBox="0 0 100 50" fill="none">
        <rect width="100" height="50" fill="white" />
        <rect x="22" y="14" width="56" height="7" rx="3.5" fill="black" />
        <rect x="22.5" y="25.5" width="55" height="6" rx="3" fill="transparent" stroke="black" />
      </svg>

      <Flex alignItems={'center'}>
        <Text textAlign={'center'} fontSize={13} color="gray">  Github : @deepakvishwakarma-hh </Text>
      </Flex>

    </Flex>
    <FloatButton />
  </Container>
</>

export default Home

const FeatureSection = ({ topic, paragraph, url }: any) =>
  <Flex flexDir={['column', 'column', 'row', 'row']} alignItems={'center'} my={10} h={'20rem'}>
    <Center flex={1} display={['none', 'none', 'block', 'block']}>
      <Image width={300} height={300} alt="img" src={url} />
    </Center>
    <Center flex={1} display={['block', 'block', 'none', 'none',]} position="relative" width={'100%'} height={'300px'}>
      <Image layout='fill' alt="img" src={url} />
    </Center>
    <Flex h="100%" justifyContent={'center'} flexDir={'column'} flex={2} pl={[0, 0, 5, 5]} pt={['2rem', '2rem', 0, 0]}>
      <Heading textAlign={['center', 'center', 'left', 'left']} my={[4, 2, 2, 2]} as={'h5'} fontWeight={['500', '600', '800', '800']} fontSize={[20, 23, 23, 23]}>{topic}</Heading>
      <Text fontSize={[13, 12, 12, 12]} px={['0em', '5em', '0em', '0em']} textAlign={['center', 'center', 'left', 'left']} color={'grey'}>{paragraph}</Text>
    </Flex>
  </Flex>


const FloatButton = () => {
  const { scrollY, height } = useWindowScrollPositions()
  const upPath = "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
  const downPath = "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z";
  const helfHeightOfPage = height / 2;
  const conditionallyRender = (scrollY < helfHeightOfPage) ? downPath : upPath;
  const conditionallyToScroll = (scrollY < helfHeightOfPage) ? "/#footer" : "/#header";
  return (
    <Center width={50} height={50} bg={'black'} color="white" right={"2rem"} bottom={"2rem"} position={'fixed'} borderRadius={'50%'} onClick={() => { Router.push(conditionallyToScroll) }}>
      <svg width="16" height="16" fill="white" viewBox="0 0 16 16">
        <path fillRule="evenodd" d={conditionallyRender} />
      </svg>
    </Center>
  )
}