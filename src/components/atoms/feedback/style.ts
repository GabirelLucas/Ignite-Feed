import styled from "Styled-components";


export const InputContainer =  styled.textarea `
    display: flex;
    width: 100%;
    height: 96px;
    padding: 13px 16px 61px 16px;
    background-color: ${props => props.theme['gray-800']};
    color: ${props => props.theme['gray-200']};
    border: none;
    border-radius: 8px;
    outline: none;
    overflow: hidden;
    resize: none;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 1.5rem;

    &:focus {
        border: 1px solid ${props => props.theme['green-500']};
    }
`