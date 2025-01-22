import { Avatar } from "../../atoms/avatar";
import { UserName } from "../../atoms/userName";
import { UserRoleName } from "../../atoms/userRoleLabel";

import { FormFeedback } from "../../molecules/formFeedback";
import { ContentFeed, ContentText, FeedContainer, HeaderFeed, InfosUser, WrapperDate, ContentLink } from "./style";


export function Feed () {
    return (
        <FeedContainer>
            <HeaderFeed>
                <InfosUser>
                    <Avatar userFoto="https://avatars.githubusercontent.com/u/87655145?v=4"/>
                    <div>
                        <UserName nome="Mike Brito"/>
                        <UserRoleName role="Dev Full-Stack"/>
                    </div>
                </InfosUser>
                
                <WrapperDate>publicado há 3h</WrapperDate>
            </HeaderFeed>

            <ContentFeed>
                <ContentText>Fala galeraa 👋</ContentText>
                <ContentText>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.
                     O nome do projeto é DoctorCare 🚀
                </ContentText>    
                <ContentText>
                    <ContentLink>👉 jane.design/doctorcare</ContentLink>
                </ContentText>
                <ContentText>
                    <ContentLink>#novoprojeto #nlw #rocketseat</ContentLink>
                </ContentText>
            </ContentFeed>

            <FormFeedback/>

            
        </FeedContainer>
    )
}