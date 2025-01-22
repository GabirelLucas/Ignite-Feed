import { AvatarContainer } from "./style";

interface AvatarProps {
    userFoto : string
}

export function Avatar ({userFoto} : AvatarProps) {
    return <AvatarContainer src={userFoto} alt="foto de perfil do usuário" />
}