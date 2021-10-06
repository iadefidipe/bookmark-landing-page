import React from 'react'
import { PageLogo, LogoImg } from './style/Logo.style'

const Logo = ({src}) => {
    return (
        <PageLogo to="/" >
            <LogoImg src={src} />
        </PageLogo>
    )
}

export default Logo
