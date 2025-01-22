
import styled  from "Styled-components";

interface ButtonContainerProps {
    $hasIcon?: boolean;
    $bordered?: boolean;
    $variant: 'primary' | 'secondary' | 'danger' | 'isLiked' | 'modalPrimary' | 'modalSecondary',
}

const buttonvariants = {
    primary: {
        backgroundColor: "#00875f",
        color: "#ffffff",
        border: "none",
      },
      secondary: {
        backgroundColor: "#202024",
        color: "#00875f",
        border: "2px solid #00875f",
      },
      danger: {
        backgroundColor: "#29292E",
        border: "none",
        color: "#8D8D99",
      },
      isLiked:{
        backgroundColor: "#202024",
        border: "none",
        color : "#8D8D99"
      },
      modalPrimary: {
        backgroundColor: "#29292E",
        color: "#E1E1E6",
        border: "none",
        },
      modalSecondary: {
        backgroundColor: "#29292E",
        color: "#F75A68",
        border: "none",
        },
    }
 

export const ButtonContainer = styled.button<ButtonContainerProps>`
    display: inline-flex;
    padding: ${({ $variant }) =>
        $variant === "danger" ||$variant === "isLiked" ? "0" : "16px 24px 14px"};
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    gap: ${({ $hasIcon }) => ($hasIcon ? "6px" : "0")};
    align-items: center;
    
    ${props => {
        const variantStyles = buttonvariants[props.$variant]
        return (
            `background-color: ${variantStyles.backgroundColor};
             color :  ${variantStyles.color};
             border : ${variantStyles.border};

            &:hover {
                background-color: ${
                    props.$variant === "primary"
                    ? "#00B37E"
                    : props.$variant === "secondary"
                    ? "#00875F"
                    : props.$variant === "danger"
                    ? "#29292E"
                    : "#29292E"
                };
                color: ${
                    props.$variant === "primary"
                    ? "#FFF"
                    : props.$variant === "secondary"
                    ? "#FFF"
                    : props.$variant === "danger"
                    ? "#F75A68"
                    : "#FFF"
                };
            }
            `
        )
    }};
`