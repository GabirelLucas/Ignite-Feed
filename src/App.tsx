import { ThemeProvider } from "Styled-components";
import { defaultTheme } from "./styles/defaultTheme";
import { GlobalStyle } from "./styles/global";

import { FeedTemplate } from "./templates/FeedTemplate";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <FeedTemplate/>
    </ThemeProvider>
  )
}


