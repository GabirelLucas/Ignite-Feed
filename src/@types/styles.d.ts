import "Styled-components";
import { defaultTheme } from "../styles/defaultTheme";

type ThemeType = typeof defaultTheme

declare module 'Styled-components' {
    export interface DefaultTheme extends ThemeType {} 
}