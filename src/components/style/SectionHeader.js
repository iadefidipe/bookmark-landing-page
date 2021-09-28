import styled from "styled-components";

export const SectionHeader = styled.h2`
    color: ${({theme, color}) => color ? theme.colors.white : theme.colors.neuDarkBlue };
    line-height: 52px;
    letter-spacing: -0.1px;
    font-size: 2rem;

    @media (max-width: ${ ({theme}) => theme.queries.mobile}){
        font-size: 1.875rem;
        letter-spacing: -0.09px;
        line-height: 40px;
    }
`