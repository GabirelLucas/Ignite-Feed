import styled from "Styled-components";


export const FormFeedbackWrapper = styled.form `
    margin-top: 1.5rem;
    border-top: 1px solid ${props => props.theme['gray-500']};

    &:focus-within footer {
        visibility: visible;
        max-height: none;
    }
`

export const FormTitle = styled.p `
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme['gray-100']};
    margin: 1.5rem 0 ;
`

export const ContainerButton = styled.footer `
    visibility: hidden;
    max-height: 0;
`