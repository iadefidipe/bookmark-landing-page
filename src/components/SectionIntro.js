import { SectionHeader } from './style/SectionHeader'
import { IntroStyle } from './style/SectionIntro.style'

const SectionIntro = ({header,text}) => {
    return (

        
        <IntroStyle>
            <SectionHeader> { header } </SectionHeader>
            <p> {text} </p>
            
        </IntroStyle>

            
        
    )
}

export default SectionIntro
