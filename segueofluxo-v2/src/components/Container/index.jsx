import styled from "styled-components";

const StyledContainer = styled.div`
  width: 1440px;//responsive
  margin: ${props=> props.$verticalMargin ? props.$verticalMargin: 0} auto;
  max-width: 100%;
`

function Container({ children, verticalMargin = false }) {

    return (
        <StyledContainer
        $verticalMargin={verticalMargin}
        >
            {children}
        </StyledContainer>
    )
}
export default Container