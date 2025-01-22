import { ContainerRole } from "./style"

interface RoleNameProps {
    role: string
}

export function UserRoleName ({role} : RoleNameProps) {
    return (
        <>
            <ContainerRole>{role}</ContainerRole>
        </>
    )
}