import { IconStyle  } from "./style/Social.style"
import theme from '../data/theme';

const SocialIcons = () => {
    return (
        <IconStyle>
            <img src={ theme.icon.facebook }alt="" />
            <img src={ theme.icon.twitter } alt="" />
        </IconStyle>
    )
}

export default SocialIcons
