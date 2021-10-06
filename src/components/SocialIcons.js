import { IconStyle,Icon } from "./style/Social.style"
import {socialData} from "../data/menuData"

const SocialIcons = () => {
    return (
        <IconStyle>
            { socialData.map( (social) => (
                <Icon to ={social.link} >
                    <img src={social.image} alt="" />
                </Icon> 
            )  ) }
        </IconStyle>
    )
}

export default SocialIcons
