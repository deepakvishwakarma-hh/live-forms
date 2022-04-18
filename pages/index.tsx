import { Container } from "@chakra-ui/react"
import * as Elements from "../components/elements"

const Home = () => {

  return (
    <Container maxW='container.lg' >
      <Elements.Header />
      <Elements.Intro />
      <Elements.Features />
      <Elements.Footer />
      <Elements.HomeFloat />
    </Container>
  )
}

export default Home
