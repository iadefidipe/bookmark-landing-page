
import styled from "styled-components"

export const NavMenu  = styled.div`
display: flex;
align-items: center;
gap: 3rem;

&>p{
    color: ${ ({theme}) => theme.colors.neuBlue};
    font-size: 0.8125rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;


    &:hover{
    color: ${ ({theme}) => theme.colors.pryRed};

    }
}

@media (max-width: ${ ({theme}) => theme.queries.deskMini}){
    display:none;
}

`