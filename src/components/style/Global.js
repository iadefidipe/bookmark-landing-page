import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    p{
        
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }
    
    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        font-family: ${({theme}) => theme.font.rubik};
    }

    p{
        color: ${ ({theme}) => theme.colors.neuBlue };
        font-size: 1.125rem ;
        line-height: 28px;
    }
    h1{
        color: ${({theme}) => theme.colors.neuDarkBlue};
        line-height: 52px;
        letter-spacing: -0.15px;
        font-size: 3rem;

    }

    / * Make images easier to work with */
    img,
    picture {
        display: block;
        max-width: 100%;
    }

    img[width] {
        width: auto; /* Defer to max-width */
    }

    img[width][height] {
        height: auto; /* Preserve aspect ratio */
    }
    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    button{
        border: none;
        background: none;
    }

    /* Remove all animations and transitions for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
        }
    }


`

export default GlobalStyles