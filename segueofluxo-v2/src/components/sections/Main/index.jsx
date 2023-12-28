import styled from "styled-components";
import Title from "../../../components/Title"
import Text from "../../../components/Text"
import Button from "../../../components/Button"
import theme from "../../theme"

const anchor = "main";
const MainContainer = styled.div`
    margin-top:   160px;//responsive
    display: flex;
    gap: 27px;
    justify-content: center;
    @media (max-width: ${props => props.$theme.screen.lg}) {
    img#banner{
        display: none;
    }
    main{
        flex: 1;
    }
  }
  #div__button_and_p{
    float: right;
    display: flex; 
    margin: 0; 
    margin-top: 55px; 
    margin-right: 45px;
  
  }
  #div__test_and_arrow{
      transform: rotate(21.587deg);
 }
  @media (max-width: ${props => props.$theme.screen.md}) {
    margin-top:   100px;//responsive
    #div__button_and_p{
        margin-top: 2vw; 
        margin-right: 8vw;
    }
    button{
        width: 60vw!important;
        height: 12vw;
        font-size:  6vw;
    }
    #div__test_and_arrow{
        
      p{font-size: 6vw; margin-top: 10vw;}//
      img{
          width: 12vw;
      }
    }
  }
`
const FloatyPara = styled.p`
    margin: 0;
    margin-top: 40px;
    color: var(--Gray-Scale-gray-800, #242424);
    font-family: Unkempt;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 40.8px */
    white-space: nowrap;
`
const Bold = styled.strong`
    font-weight: 600!important;
`

const Main = () => {
    return (
        
            <MainContainer $theme={theme} id={anchor}> 
                <main>
                    <Title marginTopZero marginBottomZero>
                        ATENDA 24 HORAS <br/>
                        pare de perder clientes
                    </Title>

                    
                    <Text 
                    size="34px" 
                     margin_top="46px"  
                     justify
                    >
                        Nós integramos a 
                        <Bold> Inteligencia Artificial </Bold> 
                        no
                        <br/> seu negócio, automatizando seus<br/>  atendimentos e 
                        <Bold> não perdendo leads e<br/>  clientes </Bold>
                        por falta de disponibilidade
                    </Text>

                    <div id="div__button_and_p" >
                        <Button width="324px" height="66px" fontSize="28px">
                            Testar automação
                        </Button>
                        <div id="div__test_and_arrow" >
                            <FloatyPara>
                                testar a IA
                            </FloatyPara>
                            <img  src="/img/arrow1.svg" alt="arrow" />
                        </div>
                    </div>

                </main>

                <img id="banner" src="/img/banner.svg" alt="Banner Brain GPT" />
                
           </MainContainer>
       
    )
}
export default Main   