import { Header } from "../../components/molecules/Header/indexHeader";
import { Feed } from "../../components/organisms/feed";
import { Siderbar } from "../../components/organisms/Sidebar";
import { Wrapper } from "./style";


export function FeedTemplate () {
    return (
        <>
            <Header/>
            <Wrapper>
                <Siderbar/>
                <Feed/>
            </Wrapper>
        </>
    )
}