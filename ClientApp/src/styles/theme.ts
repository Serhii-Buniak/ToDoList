import baseStyled, { ThemedStyledInterface, css as baseCss, ThemedCssFunction } from "styled-components";


const theme = {
    colors: {
        background: '#162831',
        text: '#FFFFFF',
        btnSubmit: '#018ABE',
        btnCancel: '#7A4B62',
        placeholder: '#939393',
    }
}

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>
export const css = baseCss as ThemedCssFunction<Theme>

export default theme