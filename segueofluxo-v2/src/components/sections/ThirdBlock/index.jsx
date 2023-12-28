import styled from "styled-components"
import Title from "../../../components/Title"
import Button from "../../Button"
import theme from "../../theme"



const anchor = "contato"

const ThirdBlockStyled = styled.section`
    display: flex;
    height: 700px;
    max-width: 100%;
    background: url("/img/space-bg.png");
    background-color: #242424;
    background-repeat: no-repeat;
    background-size: cover;
    gap: 300px;
    img{
        width: 50%;
        max-width: 700px;
    }
    @media (max-width:${props => props.$theme.screen.exLg}) {
        gap: 50px;
    }
    @media (max-width: ${props => props.$theme.screen.lg}) {
        img#banner__person{
            display: none;
        }
        h5{
            margin-bottom: 10px;
        }
    }
    @media (max-width: ${props => props.$theme.screen.sm}) {
    
        height: 489px;
       
    }
  
`

const Bold = styled.strong`
    font-weight: 900!important;
`
const ThirdBlock = () => {

    const contentStyle = {
        marginRight: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <ThirdBlockStyled id={anchor} $theme={theme}>
            <img id="banner__person"
                // style={imgStyle}
                src="/img/pessoa.png"
                alt="pessoa" />
            <div style={contentStyle}>
                <Title
                    black={false}
                    size="50px"
                    justify
                >
                    Quer descobrir como a <br /> 
                    Inteligência Artificial<br /> 
                    pode ser a<Bold> chave </Bold>para<br /> 
                    seu negócio chegar no<br /> próximo nível?🚀
                </Title>
                <Button width="324px" height="66px" fontSize="28px">
                    Nos Contate!
                </Button>
            </div>
        </ThirdBlockStyled>
    )
}
export default ThirdBlock