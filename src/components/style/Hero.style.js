import styled from "styled-components";


export const StyledHero = styled.section`
    display: ${ ({feature,clicked,index}) => {
        if (feature){
            if(clicked === index){
                return 'flex'

            }
            else{
                return 'none'
            }
        }
        else{
            return 'flex'
        }
    }};
    justify-content: space-between;
    gap:65px;
    padding: 50px 30px 100px 100px;
    align-items: center;
    background: url(${ ({feature,theme}) => feature ? theme.rectangleLeft : theme.rectangleRight });
    background-repeat: no-repeat;
    background-position:  ${ ({feature}) => feature ? 'left bottom' : 'right bottom' } ;


    &>*{
        flex: 1;
    }

    
@media (max-width: ${ ({theme}) => theme.queries.deskMid}){
    flex-direction: column-reverse;
    background-position: ${ ({feature}) => feature ? 'left bottom' : 'right 170px'} ;
    text-align:center;


}
@media (max-width: ${ ({theme}) => theme.queries.tablet}){
    background-size: auto;
    padding: 50px 32px 100px;
    background-position: ${ ({feature}) => feature ? 'left bottom' : 'right 110px'} ;

}
@media (max-width: ${ ({theme}) => theme.queries.mobile}){
    background-size: 350px ;
    

    background-position:  ${ ({feature}) => feature ? 'left 500px' : 'right 90px'} ;

}
@media (max-width: ${ ({theme}) => theme.queries.mobileMini}){
    background-size: 200px  ;



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

    @media (max-width: ${ ({theme}) => theme.queries.deskMid}){
        justify-content: center;
    }

`
export const HeroImage= styled.img`
    /* width: 579px;
    height: 386px; */

    /* @media (max-width: ${ ({theme}) => theme.queries.mobile}) {
        width: 208px;
        height: 312px;
    } */

`

