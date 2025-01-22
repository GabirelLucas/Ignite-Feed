
import * as Dialog from "@radix-ui/react-dialog"
import styled from "Styled-components"


export const Overlay = styled(Dialog.Overlay)`
    max-width: 100vw;
    max-height: 100vh;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content) `
    background-color: ${props => props.theme['gray-700']};
    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 27rem;
    padding: 1.25rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 6px;
    text-align: center;
`

export const TitleModal =  styled(Dialog.Title)`
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme['gray-100']};
`

export const Description = styled(Dialog.Description)`
    font-size: 16px;
    font-weight: 400;
    color: ${props => props.theme['gray-200']};
    padding: 0 64px;
`

export const WrapperButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px
`