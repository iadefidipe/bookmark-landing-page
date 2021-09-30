import React from 'react'
import { Button } from './style/Button.style'
import { HeroCta, HeroImage, HeroLeft, HeroRight, StyledHero } from './style/Hero.style'

const Hero = ({theme}) => {
    return (
        // <Container>

            <StyledHero>
                <HeroLeft>

                    <h1> {theme.heroData.title} </h1>
                    <p> {theme.heroData.text} </p>

                    <HeroCta>
                        <Button bgcolor={theme.colors.pryBlue} color={theme.colors.white}> {theme.heroData.btnChrome} </Button>

                        <Button > {theme.heroData.btnFirefox} </Button>
                    </HeroCta>

                </HeroLeft>

                <HeroRight>
                    <HeroImage src={theme.heroData.illustration} />
                </HeroRight>
            </StyledHero>

        // </Container>
        
    )
}

export default Hero
