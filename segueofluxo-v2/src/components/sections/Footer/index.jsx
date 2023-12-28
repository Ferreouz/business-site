import styled from "styled-components"
import Text from "../../../components/Text"
import theme from "../../theme"



const FooterStyled = styled.footer`
    display: flex;
    max-width: 1440px;
    height: 110px;
    padding: var(--None, 38px) var(--None, 283.976px) var(--None, 38px) var(--None, 285px);
    justify-content: center;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
    flex-direction: column;

    @media (max-width: ${props => props.$theme.screen.lg}) {
        height: 65px;
        padding: 0;
    }
`


const Footer = () => {
    return (
        <FooterStyled $theme={theme}>

            <Text font_weight={700} size={"28px"}>
            © Segue o Fluxo Automações
            </Text>

        </FooterStyled>
    )
}
export default Footer