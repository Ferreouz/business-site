import styled from "styled-components"
import theme from "../theme"

const TextStyled = styled.p`
    margin: 0;
    ${props =>  props.$margin_top ? 'margin-top: ' + props.$margin_top + ';': ''}
    color: ${props=> props.$color};
    font-family: Montserrat;
    font-size: ${props => props.$size};
    font-style: normal;
    font-weight: ${props => props.$font_weight};
    line-height: 120%; /* 40.8px */
    
    ${props=> props.$justify && 'text-align: justify!important;'}
    
    ${props =>  props.$center ? 'text-align: center;': ''}
    @media (max-width: ${props => props.$theme.screen.lg}) {
        font-size: ${props => props.$responsiveText};
    }
    text-align: center;
`

const Text = ({children, size,  margin_top, center = false, font_weight = 400, justify= false, color= "#242424"}) => {
    const responsiveText = (size === "34px") ? '4.6vw'
    : '4.6vw';
    return (
            <TextStyled 
            $theme={theme}
            $responsiveText={responsiveText}

            $size={size}  
            $margin_top={margin_top}
            $center={center}
            $font_weight={font_weight}
            $justify={justify}
            $color={color}

            >
                {children}
            </TextStyled>
    )
}
export default Text