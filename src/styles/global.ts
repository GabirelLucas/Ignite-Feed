import {createGlobalStyle} from "Styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${props => props.theme['gray-800']};
        color: white;
    }
`