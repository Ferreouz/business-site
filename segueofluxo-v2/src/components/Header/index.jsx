import styled from "styled-components"
import Button from "../Button"
import Menu from "../Menu"
import theme from "../theme"



const HeaderStyled = styled.header`
    /* padding: 10px 0; */
    position: sticky;
    background: var(--Segue-o-Fluxo-Bg-Whiteish, #F8F8F8);
    top: 0;
    z-index: 1000;
    @media (max-width: ${props => props.$theme.screen.lg}) {

      img{
          width: 50vw;
      }
      button{
            display: none;
      }

    }

`
const Nav = styled.nav`
    width: 1440px;//responsive
    margin: ${props => props.$verticalMargin ? props.$verticalMargin : 0} auto;
    max-width: 100%;
    display: flex;

    justify-content: space-around;

    img{
        max-width: 219px;
        cursor: pointer;
    }
    @media (min-width: ${props => props.$theme.screen.exLg}) {

        justify-content: space-between;
  

    }
`
const Header = () => {
    const goToAnchor = () => {
        window.location.href = "main"
    }
    return (
        <HeaderStyled $theme={theme}>
            <Nav $theme={theme}>
                <img src="/img/Logo.svg" alt="" onClick={goToAnchor}  />
                <Menu />
                <Button id="large__screen_btn">
                    Testar agora
                </Button>
            </Nav>
        </HeaderStyled>
        

    )
}
export default Header