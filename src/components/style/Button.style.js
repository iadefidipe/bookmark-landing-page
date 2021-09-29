import styled from "styled-components";


export const Button = styled.button`
    padding: ${({theme}) => theme.button.padding };
    border-radius: ${({theme}) => theme.button.radius};
    border:  ${({mobile}) =>  `2px solid ${ mobile ? 'white':'transparent' }` } ;
    box-shadow: ${({theme}) => theme.button.shadow };
    background-color: ${({mobile, bgcolor,theme}) => mobile ? 'transparent' : bgcolor || theme.colors.neuWhite};
    font-size: 0.875rem;
    font-weight: ${({theme}) => theme.weight.medium};
    color: ${({color,theme}) => color || theme.colors.neuDarkBlue};
    transition: all 300ms ease-in-out;
    &:hover{
        background-color: ${({color,theme}) => color || theme.colors.white };
        border: 2px solid ${({bgcolor,theme}) => bgcolor  || theme.colors.neuDarkBlue} ;
        color: ${({bgcolor,theme}) => bgcolor  || theme.colors.neuDarkBlue};
    }

`
