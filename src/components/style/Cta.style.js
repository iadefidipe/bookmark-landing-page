import styled from "styled-components";

export const StyledCta = styled.section`
     display: grid;
     place-content: center;
     place-items: center;
     text-align: center;
     background-color: ${({ theme }) => theme.colors.pryBlue};
     padding: 70px 0 ;

     &>p{
         color: ${({ theme }) => theme.colors.white}; 
         margin-bottom: 24px;
     }
     &>h2{
         width: 80%;

         @media (max-width: ${({ theme }) => theme.queries.mobile}){
            width: 100%;
            padding:  0 10px;
        }
     }
    
`

export const CtaForm = styled.form`

     display:flex;
     justify-content: center;
     gap: 10px;
     margin-top: 36px;

     @media (max-width: ${({ theme }) => theme.queries.mobile}){
        flex-direction: column;
    }
    
`

export const FormInput = styled.input`
    border: none;
    border-radius: 5px;
    padding: 10px  0 10px 20px;
    width: 300px;

    &::placeholder{
        color: ${({ theme }) => theme.colors.neuBlue} ;
    }


    @media (max-width: ${({ theme }) => theme.queries.mobile}){
            width: 100%;
    }
`