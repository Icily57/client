import Navbar from "../components/Navbar"
import Container from "../components/Container"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
// import Benefits from "../components/Benefits"
// import { benefitOne } from "../utils/data"
const Home = () => {
  return (
    <div>
        <Navbar />
      <Container className="bg-gradient-to-b from-blue-500 to-blue-700 min-h-screen flex flex-col justify-between">
        <Hero/>
        {/* <Benefits data={benefitOne} />  */}
      </Container>
        <Footer />
    </div>
  )
}

export default Home