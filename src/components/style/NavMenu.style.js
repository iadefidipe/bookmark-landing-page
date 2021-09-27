
import styled from "styled-components"

export const NavMenu  = styled.div`
display: flex;
align-items: center;
gap: 3rem;


@media (max-width: ${ ({theme}) => theme.queries.deskMini}){
    display:none;
}

`