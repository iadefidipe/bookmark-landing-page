import styled from "styled-components";

export const IntroStyle = styled.div`
    
    text-align: center;
    display: grid;
    place-content: center;
    place-items: center;
    

    &>h2{
        margin-bottom: 16px;
    }

    &>p{
        width: 60%;

        @media (max-width: ${({ theme }) => theme.queries.mobile}){
            width: 100%;
            
        }
    }

    @media (max-width: ${({ theme }) => theme.queries.mobile}){
        padding: 0 32px;
    }

`