import styled from "styled-components";

export const StyledFooter = styled.footer`
    background: ${ ({theme}) => theme.colors.neuDarkBlue  };  
    padding: 32px  0;
    &>div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: ${ ({theme}) => theme.queries.deskMini}){
        flex-direction: column;
        text-align: center;
        gap: 30px;

    }

      
    }
    

`

export const Footerdiv = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;

    @media (max-width: ${ ({theme}) => theme.queries.deskMini}){
        flex-direction: column;

    }

`