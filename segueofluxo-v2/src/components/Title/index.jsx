import styled from "styled-components"
import theme from "../theme"


const TitleStyled = styled.h5`
    ${props=> props.$marginTopZero && 'margin-top: 0;'}
    ${props=> props.$marginBottomZero && 'margin-bottom: 0;'}
    color: ${props=> props.$black?"#242424": "#FFFF"};
    font-family: Montserrat;
    font-size: ${props => props.$size};
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 72px */
    text-align: center;
    ${props=> props.$justify && 'text-align: justify;'}
    /* ${props => props.styles && props.styles.map(style => Object.keys(style)[0] + ":" + style[Object.keys(style)[0]] + "!important;")} */
    @media (max-width: ${props => props.$theme.screen.lg}) {
        font-size: ${props => props.$responsiveText};
    }
    
`

const Title = ({children, black = true, size = "60px", justify= false, marginTopZero = false, marginBottomZero = false}) => {
    // const responsiveText = (size === "60px") ? '8vw' 
    // : ('');
    const responsiveText =  '8vw';


    return (
        <TitleStyled
        $theme={theme}
        $responsiveText={responsiveText}

        $black={black}
        $size={size}
        $justify={justify}
        $marginTopZero={marginTopZero}
        $marginBottomZero={marginBottomZero}
        >
            {children}
        </TitleStyled>
    )
}
export default Title