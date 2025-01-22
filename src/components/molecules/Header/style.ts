import styled from "Styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme['gray-700']};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 0;
    font-weight: 700;
    color: ${props => props.theme['gray-100']};
`