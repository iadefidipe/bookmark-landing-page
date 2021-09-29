import React from 'react'
import SectionIntro from './SectionIntro'
import { StyledFAQ } from './style/FAQ.style'

const FAQ = ({theme}) => {
    return (
        <StyledFAQ>

            <SectionIntro header={theme.faqData.title} text = {theme.faqData.subtitle} />

        </StyledFAQ>
    )
}

export default FAQ
