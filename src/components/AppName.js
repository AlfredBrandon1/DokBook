import styled from 'styled-components'

const StyledAppTitle = styled.h1`
    color: blue;
    font-size: 3em;
    font-style: bold;
    display:flex;
    justify-self:center;
    font-family: monospace;
    margin-left: 2rem;
`

const AppName = () => {
    return(
        <>
            <StyledAppTitle> DokBook </StyledAppTitle>
        </>
    )
}

export default AppName