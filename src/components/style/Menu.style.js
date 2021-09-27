import styled from "styled-components";

export const MenuStyle = styled.div`
    display: flex;
    gap:46px;

    @media (max-width: ${ ({theme}) => theme.queries.deskMini}){
        flex-direction: ${ ({column}) => column && 'column' };

    }

`

export const MenuText = styled.p`
    text-transform: uppercase;
    color: ${ ({header,theme}) => header ? theme.colors.neuBlue: theme.colors.white  };
    font-size: 0.8125rem;
    letter-spacing: 1.5px;


    &:hover{
    color: ${ ({theme}) => theme.colors.pryRed};

    }
`