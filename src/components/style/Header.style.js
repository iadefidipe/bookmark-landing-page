import styled from "styled-components";

export const StyledHeader = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;

`



export const Nav  = styled.nav`
    display: flex;
    align-items: center;
    gap: 3rem;



`
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

