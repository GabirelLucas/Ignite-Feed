import styled from "Styled-components";


export const CommentContainer = styled.div `
    display: flex;
    align-items: flex-start;
    gap: 16px;
    width: 686px;
    margin: 2rem 0;
`

export const CommentBox = styled.div `
    width: 100%;
`

export const CommentContent = styled.div `
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    background-color: ${props => props.theme['gray-600']};
`

export const CommentHeader = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 14px;
    font-weight: 700;
`

export const CommentText = styled.p`
    font-size: 16px;
    font-weight: 400;
    
`

export const DateOfPublication = styled.span `
    font-size: 12px;
    color: ${props => props.theme['gray-300']};
    font-weight: 400;
`