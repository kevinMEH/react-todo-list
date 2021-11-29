import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        font-family: "Inter", sans-serif;
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
            font-weight: 700;
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

export const Subtext = styled.p`
    margin-top: 20px;
    color: #888888;
    font-size: 1.4rem;
    line-height: 2rem;
`