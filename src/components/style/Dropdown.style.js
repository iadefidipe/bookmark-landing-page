import styled from "styled-components";

export const Dropdown = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;

    background: ${ ({theme}) => theme.colors.bgDrop};
    padding: 20px;
    
    
     @media (min-width: ${ ({theme}) => theme.queries.deskMini}){
        display:none;
    }
    
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const Option = styled.div`
margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Social = styled.div`
margin: 50px 0 20px;
    display: grid;
    place-content: center;
`