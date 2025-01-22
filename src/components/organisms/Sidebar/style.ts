import styled from "Styled-components";

export const SidebarContainer = styled.aside `
    background-color: ${props => props.theme['gray-700']};
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const UserBackground = styled.img `
    width: 100%;
    height: 72px;
    object-fit: cover;
`

export const ContentSidebar = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -30px;
`

export const AvatarWrapper = styled.div`
    margin-bottom: 1rem;
`

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;
    border-top: 1px solid ${props => props.theme['gray-500']};
`