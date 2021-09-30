import styled from "styled-components";

export const FeaturesContainer = styled.section`
    margin: 100px 0;

`

export const TabHeaders = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;

`

export const TabText = styled.p`
    padding: 20px 50px ;
    border-bottom: 1px solid ${ ({theme}) => theme.colors.neuBlue};
    position: relative;

    &::after{
        content: '';
        height: 3px;
        width: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        margin-top: 17px; 
        opacity: ${ ({clicked, index}) => clicked === index ? '1' : '0' } ;
        background-color: ${ ({theme}) => theme.colors.pryRed };
    }

    &:hover{
        &::after{
            opacity: 1;
        }
    }


    
`