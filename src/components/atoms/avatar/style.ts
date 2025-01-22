import styled from "Styled-components";



export const AvatarContainer = styled.img`
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 5px;
    outline: 2px solid ${props => props.theme['green-500']};
    border: 3px solid ${props => props.theme['gray-700']}
`