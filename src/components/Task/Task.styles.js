import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto min-content;
    margin: 12px 0px;
    height: 40px;
    
    button {
        border: none;
        padding: 12px 24px 12px 24px;
        color: #FFFFFF;
        background-color: #000000;
        border-radius: 5px;
        font-weight: 600;
    }
    
    span {
        border: 1px solid grey;
        border-radius: 5px;
        padding: 4px 15px 4px 15px;
        margin-right: 15px;
        display: flex;
        align-items: center;
    }
`