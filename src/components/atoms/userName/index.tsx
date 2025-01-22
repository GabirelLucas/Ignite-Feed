import { UserLabelName } from "./style"

interface UserInfoProps {
    nome : string 
}
export function UserName ( {nome} : UserInfoProps) {
    return (
        <>
            <UserLabelName>{nome}</UserLabelName>
        </>
        
    )
}