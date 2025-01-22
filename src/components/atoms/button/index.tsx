import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    hasIcon?: boolean;
    bordered?: boolean;
    $variant?: 'primary' | 'secondary' | 'danger' | 'isLiked' | 'modalPrimary' | 'modalSecondary';
    type?: "button" | "submit" | "reset";
    
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps> (
    ({ children, type = "submit", bordered = false, hasIcon = false, $variant = 'primary',  ...rest }, ref) => {
    return (
        <ButtonContainer  $variant={$variant} $hasIcon={hasIcon} $bordered={bordered} type={type}  {...rest} ref={ref}>
            {children}
        </ButtonContainer>
    )
}
)