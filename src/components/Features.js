import {useState} from 'react'
import SectionIntro from './SectionIntro'
import { FeaturesContainer, TabHeaders, TabText } from './style/Features.style'
import { Button } from './style/Button.style'
import { HeroCta, HeroImage, HeroLeft, HeroRight, StyledHero } from './style/Hero.style'
import { SectionHeader } from './style/SectionHeader'

const Features= ({theme}) => {

    const [toggle, setToggle] = useState(0)

    const feature = true

    const  handleToggle = (index) => {
        setToggle(index)
 }
    return (
        <FeaturesContainer>

            <SectionIntro header={theme.featureData.title} text = {theme.featureData.subtitle} />

            <TabHeaders>

                {theme.featureData.headers.map( (header,index) => (
                    <TabText key={index} onClick={ () => handleToggle(index) } clicked ={toggle} index ={index} > { header } </TabText>
                ) )}

            </TabHeaders>

            { theme.featureData.content.map( (content, index) => (
                <StyledHero key={index} feature={feature} clicked = {toggle} index={index} >

                    <HeroRight>
                        <HeroImage src={content.image} alt={content.imageAlt} />      
                    </HeroRight>

                    <HeroLeft>

                        <SectionHeader>{content.title}</SectionHeader>
                        <p> {content.description} </p>

                        <HeroCta>
                            <Button bgcolor={theme.colors.pryBlue} color={theme.colors.white}> {content.btnText} </Button>                       
                        </HeroCta>

                        
                    </HeroLeft>

                </StyledHero>

            ) ) }
            

        </FeaturesContainer>
    )
}

export default Features
