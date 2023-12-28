import styled from "styled-components"
import Title from "../../Title"
import Text from "../../Text"
import theme from "../../theme"

const anchor = "pra_que"


const SecondBlockStyled = styled.div`
  margin: 0 auto 124px;

`

const Grid = styled.div`
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px 1.2vw;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  gap: 147px;
  @media (max-width: ${props => props.$theme.screen.md}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
    gap: 79px;
  }
`

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


const SecondBlock = () => (
    <SecondBlockStyled id={anchor}>
        <Text center size={"20px"} font_weight={700}  color={"#C79C4B"} margin_top={"100px"}>O futuro está aqui</Text>
        <Title marginTopZero>Pra que automação? </Title>
        <Grid $theme={theme}>
            <Item>
                <Text size={"28px"} font_weight={700}>Remarketing</Text>
                <Text center size={"20px"} font_weight={500} margin_top={"9px"} justify>
                    Você pode fazer o remarketing para a sua base de contatos, sem gastar mais nada!
                </Text>
            </Item>
            <Item>
                {/* <Text> Companhar o mercado</Text> */}
                <Text size={"28px"} font_weight={700}>Unificação</Text>
                <Text center size={"20px"} font_weight={500} margin_top={"9px"} justify>
                    Unifique vários números de WhatsApp em 1! Te delegando o controle do tudo oque ocorre na sua operação.
                </Text>
            </Item>
            <Item>
                <Text size={"28px"} font_weight={700}>Conveniência</Text>
                <Text center size={"20px"} font_weight={500} margin_top={"9px"} justify>
                    Através da Integração com seu ERP, CRM seu atendimento fica completo: 2via de boleto online; agendamento automático; cobrança preventiva;<br />
                    Tudo sem parar nenhum funcionário!
                </Text>
            </Item>
            <Item>
                <Text size={"28px"} font_weight={700}>Escalabilidade</Text>
                <Text center size={"20px"} font_weight={500} margin_top={"9px"} justify>
                    Tenha vários vendedores e atendentes conectados ao mesmo tempo (no mesmo número)
                </Text>
            </Item>
            <Item>
                <Text size={"28px"} font_weight={700}>Vá pra praia!</Text>
                <Text center size={"20px"} font_weight={500} margin_top={"9px"} justify>Deixe que a Inteligência Artificial cobre seu cliente inadimplente, qualifique seu LEAD, faça agendamentos enquanto você toma uma margarita no Rio.</Text>
            </Item>
            <Item>
                <Text size={"28px"} font_weight={700}>Um caminho sem volta!</Text>
                <Text center size={"20px"} font_weight={500} margin_top={"9px"} justify>
                    Empresas de todos os ramos já aderiram automações e a Inteligência Artificial em seu negócio.
                </Text>
            </Item>
        </Grid>
    </SecondBlockStyled>
)

export default SecondBlock
