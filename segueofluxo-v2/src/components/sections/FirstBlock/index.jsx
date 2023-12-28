import styled from "styled-components"
import Title from "../../../components/Title"
import Container from "../../Container"
import theme from "../../theme"


const anchor = "ferramentas"

const FirstBlockStyled = styled.section`
    height: 550px;
    border-radius: var(--None, 0px);
    background: var(--Gray-Scale-gray-100, #F1F3F5);
    display: flex;
    margin-top: 120px;
    width: 1440px;
    width: 100%;
    @media (max-width: ${props => props.$theme.screen.sm}) {
        height: 320px;
        margin-top: 40px;

    }
    `
const Ferramentas = styled.div`
    width: 1440px;
    width: 100%;
     //more centered and spaces in the borders
     justify-content: space-around;
     

    display: flex;
    ${props => props.$margin_top ? 'margin-top: ' + props.$margin_top + ';' : ''}
    img{
        width: 181px;
        max-height: 60px;
    }
    .break {
           display: none;
    }
    //let the items go into multiple lines
    flex-wrap: wrap;

    //affects the 7th child 
    :nth-child(7){
        display: none;
    }
    @media (max-width: ${props => props.$theme.screen.md}) {
        img{
            width: 18vw;
            max-height: 9vw;
        }

    }
    @media (max-width: ${props => props.$theme.screen.sm}) {
        img{
            width: 28vw;
            max-height: 9vw;
        }
        gap: 1.3vw;
        :nth-child(7){
            display: block;
        }
        margin-top: 10px;
        //break the itens in new line
        .break {
            flex-basis: 100%;
            height: 0;
        }
       
    }
`

const FirstBlock = () => {

    return (
        <FirstBlockStyled id={anchor} $theme={theme}>
            <Container>
                <Title>
                    Principais Integrações
                </Title>
                    <Ferramentas $theme={theme}>
                        <img  src="/img/botconversa.svg" alt="" />
                        <img  src="/img/rd.svg" alt="" />
                        <img  src="/img/manychat.svg" alt="" />
                        <div className="break"></div>
                        <img  src="/img/fb.svg" alt="" />
                        <img  src="/img/correios.svg" alt="" />
                        <img  src="/img/hinova.png" alt="" />

                    </Ferramentas>
                    <Ferramentas $theme={theme} $margin_top={"48px"}>
                        <img  src="/img/active.svg" alt="" />
                        <img  src="/img/instagram.svg" alt="" />
                        <img  src="/img/totvs.svg" alt="" />
                        <div className="break"></div>
                        <img  src="/img/calendar.svg" alt="" />
                        <img  src="/img/hotmart.png" alt="" />
                        <img  src="/img/shopify.svg" alt="" />
                    </Ferramentas>
            </Container>
        </FirstBlockStyled>
    )
}
export default FirstBlock