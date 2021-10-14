import React, { useState } from "react";
import { Button } from './style/Button.style'
import { Container } from './style/container.style'
import { CtaForm, FormInput, StyledCta, InputDiv, EmailError } from './style/Cta.style'
import { SectionHeader } from './style/SectionHeader'
import { validEmail } from "../helpers/Config";



const Cta = ({theme}) => {

    const [input, setInput] = useState({});
    const [error, setError] = useState(true);
    const [email, setEmail] = useState("");
  
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      
      setInput({ [name]: value });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();

    
  
      const emailValid = validEmail.test(
          input.email
      );
      console.log(emailValid)
  
      if (!emailValid) {
        setError(false);
      } else {
        setError(true);
        setEmail(input);
        document.getElementById("email").value = " ";
      }
    };

    const color = true

    return (
        <div>
            
                <StyledCta>

                    <p>{theme.ctaData.text}</p>

                    <SectionHeader color = {color} > {theme.ctaData.title} </SectionHeader>

                    <CtaForm onSubmit={handleFormSubmit} >

                        <InputDiv>
                            <FormInput name="email"id="email" placeholder={theme.ctaData.placeholder} error={error} email={email} onChange={handleInputChange} />

                            {!error && <EmailError> {theme.ctaData.errorMessage} </EmailError> }
                        </InputDiv>
                        

                        <div><Button bgcolor={theme.colors.pryRed} color={theme.colors.white}>{theme.btnNav}  </Button></div>

                    </CtaForm>

                    

                </StyledCta>
            
            
        </div>
    )
}

export default Cta
