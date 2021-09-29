import styled from "styled-components";


export const HamburgerStyle = styled.img`
    @media (min-width: ${ ({theme}) => theme.queries.deskMini}){
        display:none;
    }
    cursor: pointer;
`