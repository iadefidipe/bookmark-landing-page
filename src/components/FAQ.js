import React, { useState } from 'react'
import SectionIntro from './SectionIntro'
import { Button } from './style/Button.style'
import { FAQContainer, FAQuestion, StyledFAQ, MainContainer, ButtonContainer } from './style/FAQ.style'


const FAQ = ({theme}) => {
    const [toggleFaq, setToggleFaq] = useState(false)

    const handleToggle = (index) => {
        if (toggleFaq === index) {
          return setToggleFaq(null);
        }
        setToggleFaq(index);
      };

    return (
        <StyledFAQ>

            <SectionIntro header={theme.faqData.title} text = {theme.faqData.subtitle} />

            <MainContainer>
                
                {theme.faqData.faqs.map( (faq,index) => (
                    <FAQContainer key={index} onClick={ () => handleToggle(index)} >
                        <FAQuestion>
                            <h4>{faq.question}</h4>
                            <img src={toggleFaq ===index ? theme.icon.arrowUp : theme.icon.arrow } alt=""  />
                        </FAQuestion>
                
                        { toggleFaq ===index && <p>{faq.answer}</p>}
                    </FAQContainer>
                ) )}

                
            </MainContainer>

            <ButtonContainer>
                <Button bgcolor={theme.colors.pryBlue} color={theme.colors.white}> {theme.faqData.faqButton.text} </Button>
            </ButtonContainer>
            

        </StyledFAQ>
    )
}

export default FAQ



