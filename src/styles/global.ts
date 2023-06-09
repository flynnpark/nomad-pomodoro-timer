import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${(props) => props.theme.primaryColor};
        color: ${(props) => props.theme.secondaryColor};
    }
`;
