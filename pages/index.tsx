import { Container } from "@chakra-ui/react"
import * as Elements from "../components/elements"
import Head from "next/head"
const Home = () => {

  return (

    <>
      <Head>
        <title>Liveforms</title>
        <link rel="shortcut icon" href="/icons.svg" />

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
