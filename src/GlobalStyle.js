import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@600;800&family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&display=swap');
    
    * {
        font-family: "Open Sans", sans-serif;
    }
    
    html {
        box-sizing: border-box;
        font-size: 62.5%;
        line-height: 1;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        padding: 0;
        
        h1 {
            font-size: 4rem;
            font-weight: 800;
        }
        
        h2 {
            font-size: 2.25rem;
            font-weight: 600;
        }
        
        p, label, input, div, span {
            font-size: 1.8rem;
            font-weight: 400;
        }
    }
`

// centering content! Better method!
export const Container = styled.div`
    padding-top: 4%;
    height: auto;
    max-width: 480px;
    margin: auto;
`