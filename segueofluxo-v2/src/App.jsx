import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import Main from "./components/sections/Main"
import FirstBlock from "./components/sections/FirstBlock"
import Container from "./components/Container"
import SecondBlock from "./components/sections/SecondBlock"
import ThirdBlock from "./components/sections/ThirdBlock"
import Footer from "./components/sections/Footer"


const FundoGradiente = styled.div`

  background: var(--Segue-o-Fluxo-Bg-Whiteish, #F8F8F8);
  width: 100%;
  min-height: 100vh;
`
function App() {


  return (
    <FundoGradiente>

      <GlobalStyles />

      <Header />
      <Container>
        <Main />

      </Container>

      <FirstBlock />


      <Container>
        <SecondBlock />
      </Container>
      <ThirdBlock />


      <Footer />
    </FundoGradiente>
  )
}

export default App
