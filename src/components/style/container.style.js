import styled from "styled-components";

export const Container= styled.div`
    margin: 0 auto;
    padding: 0 100px;

    @media (max-width: ${ ({theme}) => theme.queries.tablet}){
        padding: 0 32px;

    }

`
