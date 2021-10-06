import styled from "styled-components";
import {Link} from "react-router-dom"


export const MenuStyle = styled.div`
    display: flex;
    gap:${({border}) => border ? '0px' : '46px'};
    

    @media (max-width: ${ ({theme}) => theme.queries.deskMini}){
        flex-direction: ${ ({column}) => column && 'column'};
        text-align: center;

    }

`

export const MenuText = styled(Link)`
    text-decoration: none;
    
    
    
   
    
    p{
        text-transform: uppercase;
        color: ${ ({header,theme}) => header ? theme.colors.neuBlue: theme.colors.white  };
        font-size: 0.8125rem;
        letter-spacing: 1.5px;
        border-top: ${ ({border, theme}) => border && `1px solid  #979797` } ;
        padding: ${({border}) => border && '20px 0' } ;

        &:hover{
        color: ${ ({theme}) => theme.colors.pryRed};
        };


    }

    

    &:last-of-type{
        border-bottom: ${ ({border, theme}) => border && `1px solid  #979797` };

    }
`