import { Avatar } from "../../atoms/avatar";
import { Button } from "../../atoms/button";
import { UserName } from "../../atoms/userName";
import { UserRoleName } from "../../atoms/userRoleLabel";
import { AvatarWrapper, ButtonWrapper, ContentSidebar, SidebarContainer, UserBackground } from "./style";
import {PencilSimpleLine} from "phosphor-react"




export function Siderbar () {
   return (
   <SidebarContainer>
      <UserBackground src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"
      />
      <ContentSidebar>
         <AvatarWrapper>
            <Avatar userFoto="https://avatars.githubusercontent.com/u/115639119?v=4"/>
         </AvatarWrapper>

         <UserName nome="Gabriel Nunes"/>
         <UserRoleName role="Dev Front-End"/>
      </ContentSidebar>
      <ButtonWrapper>
         <Button hasIcon bordered $variant="secondary">
            <PencilSimpleLine size={20} />
            Editar seu perfil
         </Button>
      </ButtonWrapper>
   </SidebarContainer>
    
   )
}