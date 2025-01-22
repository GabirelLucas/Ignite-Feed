import styled from "Styled-components";


export const FeedContainer = styled.article `
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 8px;
    background-color: ${props => props.theme['gray-700']};
`

export const HeaderFeed = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InfosUser = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const WrapperDate = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme['gray-300']};
`

export const ContentFeed = styled.section `
    margin-top: 1.5rem;
`

export const ContentText = styled.p `
    margin-top: 1rem;
    color: ${props => props.theme['gray-200']};
`

export const ContentLink = styled.a`
    color: ${props => props.theme['green-500']};
    font-weight: 700;
    
`