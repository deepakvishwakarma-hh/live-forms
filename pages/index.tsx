import Head from "next/head"
import { Container } from "@chakra-ui/react"
import * as Elements from "../components/elements"

const Home = () => {


  return (
    <>
      <Head>
        <title>Liveforms</title>
        <meta name="description" content="Web tools help in surveys" />
        <link rel="shortcut icon" href="/icons.svg" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="keywords" content="survey, forms, google forms, free survey, survey website, form website, free analysis" />
      </Head>

      <Container maxW='container.lg' >
        <Elements.Header />
        <Elements.Intro />
        <Elements.Features />
        <Elements.Footer />
        <Elements.HomeFloat />
      </Container>
    </>
  )
}

export default Home
