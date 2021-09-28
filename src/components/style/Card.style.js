import styled from "styled-components";

export const CardStyle = styled.div`
    border-radius: 15px;
    width: 17.5rem;
    height: 23.1875rem;
    text-align: center;
    box-shadow: ${ ({theme}) => theme.downloadData.cardShadow };
    background: url( ${ ({theme}) => theme.bgDot } ) no-repeat center 280px;
    margin-top: ${ ({margin}) => margin } ;
    

    &>img{
        margin: 49px 89px 32px  ;
    }
    &>h3{
        color: ${ ({theme}) => theme.colors.neuDarkBlue};
        letter-spacing: 0.25px;
        font-weight: ${ ({theme}) => theme.weight.medium};
        font-size: 1.25rem;
    }
    &>p{
        font-size: 0.9375rem;
        padding:  6px 0 60px;
    }


    
`