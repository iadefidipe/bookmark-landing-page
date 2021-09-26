import styled from "styled-components";


export const Button = styled.button`
    padding: ${({theme}) => theme.button.padding };
    border-radius: ${({theme}) => theme.button.radius};
    box-shadow: ${({theme}) => theme.button.shadow };
    background-color: ${({bgcolor,theme}) => bgcolor};
    font-size: 0.875rem;
    font-weight: ${({theme}) => theme.weight.medium};
    color: ${({color,theme}) => color };

    &:hover{
        background-color: ${({color,theme}) => color };
        border: 2px solid ${({bgcolor,theme}) => bgcolor} ;
        color: ${({bgcolor,theme}) => bgcolor};
    }

`
