import styled from "styled-components"

const LINK = "https://web.segueofluxoautomacoes.com.br/"

const ButtonStyled = styled.button`
    margin: 26px 0;
    width: ${props => props.$width};
    height: ${props => props.$height};
    flex-shrink: 0;
    border-radius: var(--LG, 12px);
    background: var(--Segue-o-Fluxo-Green-gold, #00E76E);
    border-color: transparent;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    transition: all .2s ease-in-out;
    //Text
    color: var(--Gray-Scale-Absolute, #FFF);
    font-family: Inter;
    font-size: ${props => props.$fontSize};
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 28.8px */
`

const Button = ({children, width="226px", height="46px", fontSize="24px"}) => {
    return (
        <ButtonStyled
        onClick={event => window.location.href = LINK}
        className="button-grow"
        $width={width}
        $height={height}
        $fontSize={fontSize}
         >
            {children}
        </ButtonStyled>
    )
}
export default Button