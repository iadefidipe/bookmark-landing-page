import React from 'react'
import { Button } from './style/Button.style'
import { Container } from './style/container.style'
import { CtaForm, FormInput, StyledCta } from './style/Cta.style'
import { SectionHeader } from './style/SectionHeader'

const Cta = ({theme}) => {

    const color = true

    return (
        <div>
            
                <StyledCta>

                    <p>{theme.ctaData.text}</p>

                    <SectionHeader color = {color} > {theme.ctaData.title} </SectionHeader>

                    <CtaForm>

                        <FormInput type="text" placeholder={theme.ctaData.placeholder} />

                        <Button bgcolor={theme.colors.pryRed} color={theme.colors.white}>{theme.btnNav}</Button>

                    </CtaForm>

                    

                </StyledCta>
            
            
        </div>
    )
}

export default Cta
