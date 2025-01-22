import { InputContainer } from "./style";
import React from "react";

interface FeedbackInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    placeholder: string;
}

export const FeedbackInput = React.forwardRef<HTMLTextAreaElement, FeedbackInputProps>(
    ({ placeholder, ...rest  }, ref) => {
        return (
            <InputContainer 
                placeholder={placeholder}
                rows={4}
                cols={50}
                ref={ref} // Passa o ref para o elemento DOM
                {...rest}
            />
        );
    }
);