import { HeaderContainer } from "./style";
import IgniteLogo from "../../../assets/IgniteLogo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <img src={IgniteLogo} alt="" />
            <h1>Ignite Feed</h1>
        </HeaderContainer>
    )
}