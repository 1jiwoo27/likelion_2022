import { createGlobalStyle } from 'styled-components';

//yarn add styled-reset
import reset from 'styled-reset';

export const lightTheme = {
    bgColor: 'white',
    fontColor: '#2c2c2c'
};

export const darkTheme = {
    fontColor: 'white',
    bgColor: '#2c2c2c'
};

export const GlobalStyles = createGlobalStyle `
    ${reset}
`;