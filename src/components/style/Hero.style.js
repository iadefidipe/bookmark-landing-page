import styled from "styled-components";


export const StyledHero = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 50px 50px 100px 100px;
    align-items: center;
    background: url(${ ({theme}) => theme.rectangleRight });
    background-repeat: no-repeat;
    background-position: right bottom;

    &>*{
        flex: 1;
    }

`
export const HeroLeft = styled.div`


    display: flex;
    flex-direction: column;
    gap: 20px;

    &>h1{
        /* margin-bottom: 24px; */
        /* width: 95%; */
    }

    &>p{
        /* margin-bottom: 32px; */
    }

`

export const HeroRight = styled.div`


`

export const HeroCta= styled.div`
    display: flex;
    gap: 1rem;

`
export const HeroImage= styled.img`
    /* width: 579px;
    height: 386px; */
`

